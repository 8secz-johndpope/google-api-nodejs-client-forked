/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace remotebuildexecution_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Remote Build Execution API
   *
   * Supplies a Remote Execution API service for tools such as bazel.
   *
   * @example
   * const {google} = require('googleapis');
   * const remotebuildexecution = google.remotebuildexecution('v2');
   *
   * @namespace remotebuildexecution
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Remotebuildexecution
   */
  export class Remotebuildexecution {
    context: APIRequestContext;
    actionResults: Resource$Actionresults;
    actions: Resource$Actions;
    blobs: Resource$Blobs;
    operations: Resource$Operations;
    v2: Resource$V2;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.actionResults = new Resource$Actionresults(this.context);
      this.actions = new Resource$Actions(this.context);
      this.blobs = new Resource$Blobs(this.context);
      this.operations = new Resource$Operations(this.context);
      this.v2 = new Resource$V2(this.context);
    }
  }

  /**
   * An `Action` captures all the information about an execution which is required to reproduce it.  `Action`s are the core component of the [Execution] service. A single `Action` represents a repeatable action that can be performed by the execution service. `Action`s can be succinctly identified by the digest of their wire format encoding and, once an `Action` has been executed, will be cached in the action cache. Future requests can then use the cached result rather than needing to run afresh.  When a server completes execution of an Action, it MAY choose to cache the result in the ActionCache unless `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By default, future calls to Execute the same `Action` will also serve their results from the cache. Clients must take care to understand the caching behaviour. Ideally, all `Action`s will be reproducible so that serving a result from cache is always desirable and correct.
   */
  export interface Schema$BuildBazelRemoteExecutionV2Action {
    /**
     * The digest of the Command to run, which MUST be present in the ContentAddressableStorage.
     */
    commandDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * If true, then the `Action`&#39;s result cannot be cached.
     */
    doNotCache?: boolean;
    /**
     * The digest of the root Directory for the input files. The files in the directory tree are available in the correct location on the build machine before the command is executed. The root directory, as well as every subdirectory and content blob referred to, MUST be in the ContentAddressableStorage.
     */
    inputRootDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * A timeout after which the execution should be killed. If the timeout is absent, then the client is specifying that the execution should continue as long as the server will let it. The server SHOULD impose a timeout if the client does not specify one, however, if the client does specify a timeout that is longer than the server&#39;s maximum timeout, the server MUST reject the request.  The timeout is a part of the Action message, and therefore two `Actions` with different timeouts are different, even if they are otherwise identical. This is because, if they were not, running an `Action` with a lower timeout than is required might result in a cache hit from an execution run with a longer timeout, hiding the fact that the timeout is too short. By encoding it directly in the `Action`, a lower timeout will result in a cache miss and the execution timeout will fail immediately, rather than whenever the cache entry gets evicted.
     */
    timeout?: string;
  }
  /**
   * Describes the server/instance capabilities for updating the action cache.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities {
    updateEnabled?: boolean;
  }
  /**
   * An ActionResult represents the result of an Action being run.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ActionResult {
    /**
     * The details of the execution that originally produced this result.
     */
    executionMetadata?: Schema$BuildBazelRemoteExecutionV2ExecutedActionMetadata;
    /**
     * The exit code of the command.
     */
    exitCode?: number;
    /**
     * The output directories of the action. For each output directory requested in the `output_directories` field of the Action, if the corresponding directory existed after the action completed, a single entry will be present in the output list, which will contain the digest of a Tree message containing the directory tree, and the path equal exactly to the corresponding Action output_directories member.  As an example, suppose the Action had an output directory `a/b/dir` and the execution produced the following contents in `a/b/dir`: a file named `bar` and a directory named `foo` with an executable file named `baz`. Then, output_directory will contain (hashes shortened for readability):  ```json // OutputDirectory proto: {   path: &quot;a/b/dir&quot;   tree_digest: {     hash: &quot;4a73bc9d03...&quot;,     size: 55   } } // Tree proto with hash &quot;4a73bc9d03...&quot; and size 55: {   root: {     files: [       {         name: &quot;bar&quot;,         digest: {           hash: &quot;4a73bc9d03...&quot;,           size: 65534         }       }     ],     directories: [       {         name: &quot;foo&quot;,         digest: {           hash: &quot;4cf2eda940...&quot;,           size: 43         }       }     ]   }   children : {     // (Directory proto with hash &quot;4cf2eda940...&quot; and size 43)     files: [       {         name: &quot;baz&quot;,         digest: {           hash: &quot;b2c941073e...&quot;,           size: 1294,         },         is_executable: true       }     ]   } } ```
     */
    outputDirectories?: Schema$BuildBazelRemoteExecutionV2OutputDirectory[];
    /**
     * The output directories of the action that are symbolic links to other directories. Those may be links to other output directories, or input directories, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output directory requested in the `output_directories` field of the Action, if the directory file existed after the action completed, a single entry will be present either in this field, or in the `output_directories` field, if the directory was not a symbolic link.  If the action does not produce the requested output, or produces a file where a directory is expected or vice versa, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
     */
    outputDirectorySymlinks?: Schema$BuildBazelRemoteExecutionV2OutputSymlink[];
    /**
     * The output files of the action. For each output file requested in the `output_files` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or in the output_file_symlinks field, if the file was a symbolic link to another file.  If the action does not produce the requested output, or produces a directory where a regular file is expected or vice versa, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
     */
    outputFiles?: Schema$BuildBazelRemoteExecutionV2OutputFile[];
    /**
     * The output files of the action that are symbolic links to other files. Those may be links to other output files, or input files, or even absolute paths outside of the working directory, if the server supports SymlinkAbsolutePathStrategy.ALLOWED. For each output file requested in the `output_files` field of the Action, if the corresponding file existed after the action completed, a single entry will be present either in this field, or in the `output_files` field, if the file was not a symbolic link.  If the action does not produce the requested output, or produces a directory where a regular file is expected or vice versa, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
     */
    outputFileSymlinks?: Schema$BuildBazelRemoteExecutionV2OutputSymlink[];
    /**
     * The digest for a blob containing the standard error of the action, which can be retrieved from the ContentAddressableStorage. See `stderr_raw` for when this will be set.
     */
    stderrDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * The standard error buffer of the action. The server will determine, based on the size of the buffer, whether to return it in raw form or to return a digest in `stderr_digest` that points to the buffer. If neither is set, then the buffer is empty. The client SHOULD NOT assume it will get one of the raw buffer or a digest on any given request and should be prepared to handle either.
     */
    stderrRaw?: string;
    /**
     * The digest for a blob containing the standard output of the action, which can be retrieved from the ContentAddressableStorage. See `stdout_raw` for when this will be set.
     */
    stdoutDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * The standard output buffer of the action. The server will determine, based on the size of the buffer, whether to return it in raw form or to return a digest in `stdout_digest` that points to the buffer. If neither is set, then the buffer is empty. The client SHOULD NOT assume it will get one of the raw buffer or a digest on any given request and should be prepared to handle either.
     */
    stdoutRaw?: string;
  }
  /**
   * A request message for ContentAddressableStorage.BatchReadBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchReadBlobsRequest {
    /**
     * The individual blob digests.
     */
    digests?: Schema$BuildBazelRemoteExecutionV2Digest[];
  }
  /**
   * A response message for ContentAddressableStorage.BatchReadBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse {
    /**
     * The responses to the requests.
     */
    responses?: Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse[];
  }
  /**
   * A response corresponding to a single blob that the client tried to upload.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponseResponse {
    /**
     * The raw binary data.
     */
    data?: string;
    /**
     * The digest to which this response corresponds.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * The result of attempting to download that blob.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * A request message for ContentAddressableStorage.BatchUpdateBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest {
    /**
     * The individual upload requests.
     */
    requests?: Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest[];
  }
  /**
   * A request corresponding to a single blob that the client wants to upload.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsRequestRequest {
    /**
     * The raw binary data.
     */
    data?: string;
    /**
     * The digest of the blob. This MUST be the digest of `data`.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
  }
  /**
   * A response message for ContentAddressableStorage.BatchUpdateBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse {
    /**
     * The responses to the requests.
     */
    responses?: Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse[];
  }
  /**
   * A response corresponding to a single blob that the client tried to upload.
   */
  export interface Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponseResponse {
    /**
     * The blob digest to which this response corresponds.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * The result of attempting to upload that blob.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Capabilities of the remote cache system.
   */
  export interface Schema$BuildBazelRemoteExecutionV2CacheCapabilities {
    /**
     * Capabilities for updating the action cache.
     */
    actionCacheUpdateCapabilities?: Schema$BuildBazelRemoteExecutionV2ActionCacheUpdateCapabilities;
    /**
     * Supported cache priority range for both CAS and ActionCache.
     */
    cachePriorityCapabilities?: Schema$BuildBazelRemoteExecutionV2PriorityCapabilities;
    /**
     * All the digest functions supported by the remote cache. Remote cache may support multiple digest functions simultaneously.
     */
    digestFunction?: string[];
    /**
     * Maximum total size of blobs to be uploaded/downloaded using batch methods. A value of 0 means no limit is set, although in practice there will always be a message size limitation of the protocol in use, e.g. GRPC.
     */
    maxBatchTotalSizeBytes?: string;
    /**
     * Whether absolute symlink targets are supported.
     */
    symlinkAbsolutePathStrategy?: string;
  }
  /**
   * A `Command` is the actual command executed by a worker running an Action and specifications of its environment.  Except as otherwise required, the environment (such as which system libraries or binaries are available, and what filesystems are mounted where) is defined by and specific to the implementation of the remote execution API.
   */
  export interface Schema$BuildBazelRemoteExecutionV2Command {
    /**
     * The arguments to the command. The first argument must be the path to the executable, which must be either a relative path, in which case it is evaluated with respect to the input root, or an absolute path.
     */
    arguments?: string[];
    /**
     * The environment variables to set when running the program. The worker may provide its own default environment variables; these defaults can be overridden using this field. Additional variables can also be specified.  In order to ensure that equivalent Commands always hash to the same value, the environment variables MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
     */
    environmentVariables?: Schema$BuildBazelRemoteExecutionV2CommandEnvironmentVariable[];
    /**
     * A list of the output directories that the client expects to retrieve from the action. Only the listed directories will be returned (an entire directory structure will be returned as a Tree message digest, see OutputDirectory), as well as files listed in `output_files`. Other files or directories that may be created during command execution are discarded.  The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path. The special value of empty string is allowed, although not recommended, and can be used to capture the entire working directory tree, including inputs.  In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes).  An output directory cannot be duplicated or have the same path as any of the listed output files.  Directories leading up to the output directories (but not the output directories themselves) are created by the worker prior to execution, even if they are not explicitly part of the input root.
     */
    outputDirectories?: string[];
    /**
     * A list of the output files that the client expects to retrieve from the action. Only the listed files, as well as directories listed in `output_directories`, will be returned to the client as output. Other files or directories that may be created during command execution are discarded.  The paths are relative to the working directory of the action execution. The paths are specified using a single forward slash (`/`) as a path separator, even if the execution platform natively uses a different separator. The path MUST NOT include a trailing slash, nor a leading slash, being a relative path.  In order to ensure consistent hashing of the same Action, the output paths MUST be sorted lexicographically by code point (or, equivalently, by UTF-8 bytes).  An output file cannot be duplicated, be a parent of another output file, or have the same path as any of the listed output directories.  Directories leading up to the output files are created by the worker prior to execution, even if they are not explicitly part of the input root.
     */
    outputFiles?: string[];
    /**
     * The platform requirements for the execution environment. The server MAY choose to execute the action on any worker satisfying the requirements, so the client SHOULD ensure that running the action on any such worker will have the same result.
     */
    platform?: Schema$BuildBazelRemoteExecutionV2Platform;
    /**
     * The working directory, relative to the input root, for the command to run in. It must be a directory which exists in the input tree. If it is left empty, then the action is run in the input root.
     */
    workingDirectory?: string;
  }
  /**
   * An `EnvironmentVariable` is one variable to set in the running program&#39;s environment.
   */
  export interface Schema$BuildBazelRemoteExecutionV2CommandEnvironmentVariable {
    /**
     * The variable name.
     */
    name?: string;
    /**
     * The variable value.
     */
    value?: string;
  }
  /**
   * A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server, but servers SHOULD use SHA-256.  The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request.  The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff.  When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message:  * Fields are serialized in tag order. * There are no unknown fields. * There are no duplicate fields. * Fields are serialized according to the default semantics for their type.  Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields.
   */
  export interface Schema$BuildBazelRemoteExecutionV2Digest {
    /**
     * The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     */
    hash?: string;
    /**
     * The size of the blob, in bytes.
     */
    sizeBytes?: string;
  }
  /**
   * A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory.  In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`:  * Every child in the directory must have a path of exactly one segment.   Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). * The files, directories and symlinks in the directory must each be sorted   in lexicographical order by path. The path strings must be sorted by code   point, equivalently, by UTF-8 bytes.  A `Directory` that obeys the restrictions is said to be in canonical form.  As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability):  ```json // (Directory proto) {   files: [     {       name: &quot;bar&quot;,       digest: {         hash: &quot;4a73bc9d03...&quot;,         size: 65534       }     }   ],   directories: [     {       name: &quot;foo&quot;,       digest: {         hash: &quot;4cf2eda940...&quot;,         size: 43       }     }   ] }  // (Directory proto with hash &quot;4cf2eda940...&quot; and size 43) {   files: [     {       name: &quot;baz&quot;,       digest: {         hash: &quot;b2c941073e...&quot;,         size: 1294,       },       is_executable: true     }   ] } ```
   */
  export interface Schema$BuildBazelRemoteExecutionV2Directory {
    /**
     * The subdirectories in the directory.
     */
    directories?: Schema$BuildBazelRemoteExecutionV2DirectoryNode[];
    /**
     * The files in the directory.
     */
    files?: Schema$BuildBazelRemoteExecutionV2FileNode[];
    /**
     * The symlinks in the directory.
     */
    symlinks?: Schema$BuildBazelRemoteExecutionV2SymlinkNode[];
  }
  /**
   * A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata.
   */
  export interface Schema$BuildBazelRemoteExecutionV2DirectoryNode {
    /**
     * The digest of the Directory object represented. See Digest for information about how to take the digest of a proto message.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * The name of the directory.
     */
    name?: string;
  }
  /**
   * ExecutedActionMetadata contains details about a completed execution.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecutedActionMetadata {
    /**
     * When the worker completed executing the action command.
     */
    executionCompletedTimestamp?: string;
    /**
     * When the worker started executing the action command.
     */
    executionStartTimestamp?: string;
    /**
     * When the worker finished fetching action inputs.
     */
    inputFetchCompletedTimestamp?: string;
    /**
     * When the worker started fetching action inputs.
     */
    inputFetchStartTimestamp?: string;
    /**
     * When the worker finished uploading action outputs.
     */
    outputUploadCompletedTimestamp?: string;
    /**
     * When the worker started uploading action outputs.
     */
    outputUploadStartTimestamp?: string;
    /**
     * When was the action added to the queue.
     */
    queuedTimestamp?: string;
    /**
     * The name of the worker which ran the execution.
     */
    worker?: string;
    /**
     * When the worker completed the action, including all stages.
     */
    workerCompletedTimestamp?: string;
    /**
     * When the worker received the action.
     */
    workerStartTimestamp?: string;
  }
  /**
   * Metadata about an ongoing execution, which will be contained in the metadata field of the Operation.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecuteOperationMetadata {
    /**
     * The digest of the Action being executed.
     */
    actionDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    stage?: string;
    /**
     * If set, the client can use this name with ByteStream.Read to stream the standard error.
     */
    stderrStreamName?: string;
    /**
     * If set, the client can use this name with ByteStream.Read to stream the standard output.
     */
    stdoutStreamName?: string;
  }
  /**
   * A request message for Execution.Execute.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecuteRequest {
    /**
     * The digest of the Action to execute.
     */
    actionDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * An optional policy for execution of the action. The server will have a default policy if this is not provided.
     */
    executionPolicy?: Schema$BuildBazelRemoteExecutionV2ExecutionPolicy;
    /**
     * An optional policy for the results of this execution in the remote cache. The server will have a default policy if this is not provided. This may be applied to both the ActionResult and the associated blobs.
     */
    resultsCachePolicy?: Schema$BuildBazelRemoteExecutionV2ResultsCachePolicy;
    /**
     * If true, the action will be executed anew even if its result was already present in the cache. If false, the result may be served from the ActionCache.
     */
    skipCacheLookup?: boolean;
  }
  /**
   * The response message for Execution.Execute, which will be contained in the response field of the Operation.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecuteResponse {
    /**
     * True if the result was served from cache, false if it was executed.
     */
    cachedResult?: boolean;
    /**
     * Freeform informational message with details on the execution of the action that may be displayed to the user upon failure or when requested explicitly.
     */
    message?: string;
    /**
     * The result of the action.
     */
    result?: Schema$BuildBazelRemoteExecutionV2ActionResult;
    /**
     * An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker&#39;s setup phase. The keys SHOULD be human readable so that a client can display them to a user.
     */
    serverLogs?: {[key: string]: Schema$BuildBazelRemoteExecutionV2LogFile};
    /**
     * If the status has a code other than `OK`, it indicates that the action did not finish execution. For example, if the operation times out during execution, the status will have a `DEADLINE_EXCEEDED` code. Servers MUST use this field for errors in execution, rather than the error field on the `Operation` object.  If the status code is other than `OK`, then the result MUST NOT be cached. For an error status, the `result` field is optional; the server may populate the output-, stdout-, and stderr-related fields if it has any information available, such as the stdout and stderr of a timed-out action.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Capabilities of the remote execution system.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecutionCapabilities {
    /**
     * Remote execution may only support a single digest function.
     */
    digestFunction?: string;
    /**
     * Whether remote execution is enabled for the particular server/instance.
     */
    execEnabled?: boolean;
    /**
     * Supported execution priority range.
     */
    executionPriorityCapabilities?: Schema$BuildBazelRemoteExecutionV2PriorityCapabilities;
  }
  /**
   * An `ExecutionPolicy` can be used to control the scheduling of the action.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ExecutionPolicy {
    /**
     * The priority (relative importance) of this action. Generally, a lower value means that the action should be run sooner than actions having a greater priority value, but the interpretation of a given value is server- dependent. A priority of 0 means the *default* priority. Priorities may be positive or negative, and such actions should run later or sooner than actions having the default priority, respectively. The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into scheduling policy.
     */
    priority?: number;
  }
  /**
   * A `FileNode` represents a single file and associated metadata.
   */
  export interface Schema$BuildBazelRemoteExecutionV2FileNode {
    /**
     * The digest of the file&#39;s content.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * True if file is executable, false otherwise.
     */
    isExecutable?: boolean;
    /**
     * The name of the file.
     */
    name?: string;
  }
  /**
   * A request message for ContentAddressableStorage.FindMissingBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2FindMissingBlobsRequest {
    /**
     * A list of the blobs to check.
     */
    blobDigests?: Schema$BuildBazelRemoteExecutionV2Digest[];
  }
  /**
   * A response message for ContentAddressableStorage.FindMissingBlobs.
   */
  export interface Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse {
    /**
     * A list of the blobs requested *not* present in the storage.
     */
    missingBlobDigests?: Schema$BuildBazelRemoteExecutionV2Digest[];
  }
  /**
   * A response message for ContentAddressableStorage.GetTree.
   */
  export interface Schema$BuildBazelRemoteExecutionV2GetTreeResponse {
    /**
     * The directories descended from the requested root.
     */
    directories?: Schema$BuildBazelRemoteExecutionV2Directory[];
    /**
     * If present, signifies that there are more results which the client can retrieve by passing this as the page_token in a subsequent request. If empty, signifies that this is the last page of results.
     */
    nextPageToken?: string;
  }
  /**
   * A `LogFile` is a log stored in the CAS.
   */
  export interface Schema$BuildBazelRemoteExecutionV2LogFile {
    /**
     * The digest of the log contents.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file.
     */
    humanReadable?: boolean;
  }
  /**
   * An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory&#39;s full contents rather than a single file.
   */
  export interface Schema$BuildBazelRemoteExecutionV2OutputDirectory {
    /**
     * The full path of the directory relative to the working directory. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory.
     */
    path?: string;
    /**
     * The digest of the encoded Tree proto containing the directory&#39;s contents.
     */
    treeDigest?: Schema$BuildBazelRemoteExecutionV2Digest;
  }
  /**
   * An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name.  `OutputFile` is binary-compatible with `FileNode`.
   */
  export interface Schema$BuildBazelRemoteExecutionV2OutputFile {
    /**
     * The digest of the file&#39;s content.
     */
    digest?: Schema$BuildBazelRemoteExecutionV2Digest;
    /**
     * True if file is executable, false otherwise.
     */
    isExecutable?: boolean;
    /**
     * The full path of the file relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash.
     */
    path?: string;
  }
  /**
   * An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`.  `OutputSymlink` is binary-compatible with `SymlinkNode`.
   */
  export interface Schema$BuildBazelRemoteExecutionV2OutputSymlink {
    /**
     * The full path of the symlink relative to the working directory, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash.
     */
    path?: string;
    /**
     * The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. The canonical form forbids the substrings `/./` and `//` in the target path. `..` components are allowed anywhere in the target path.
     */
    target?: string;
  }
  /**
   * A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action&#39;s execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform.
   */
  export interface Schema$BuildBazelRemoteExecutionV2Platform {
    /**
     * The properties that make up this platform. In order to ensure that equivalent `Platform`s always hash to the same value, the properties MUST be lexicographically sorted by name, and then by value. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
     */
    properties?: Schema$BuildBazelRemoteExecutionV2PlatformProperty[];
  }
  /**
   * A single property for the environment. The server is responsible for specifying the property `name`s that it accepts. If an unknown `name` is provided in the requirements for an Action, the server SHOULD reject the execution request. If permitted by the server, the same `name` may occur multiple times.  The server is also responsible for specifying the interpretation of property `value`s. For instance, a property describing how much RAM must be available may be interpreted as allowing a worker with 16GB to fulfill a request for 8GB, while a property describing the OS environment on which the action must be performed may require an exact match with the worker&#39;s OS.  The server MAY use the `value` of one or more properties to determine how it sets up the execution environment, such as by making specific system files available to the worker.
   */
  export interface Schema$BuildBazelRemoteExecutionV2PlatformProperty {
    /**
     * The property name.
     */
    name?: string;
    /**
     * The property value.
     */
    value?: string;
  }
  /**
   * Allowed values for priority in ResultsCachePolicy Used for querying both cache and execution valid priority ranges.
   */
  export interface Schema$BuildBazelRemoteExecutionV2PriorityCapabilities {
    priorities?: Schema$BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange[];
  }
  /**
   * Supported range of priorities, including boundaries.
   */
  export interface Schema$BuildBazelRemoteExecutionV2PriorityCapabilitiesPriorityRange {
    maxPriority?: number;
    minPriority?: number;
  }
  /**
   * An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization:  * name: `build.bazel.remote.execution.v2.requestmetadata-bin` * contents: the base64 encoded binary `RequestMetadata` message.
   */
  export interface Schema$BuildBazelRemoteExecutionV2RequestMetadata {
    /**
     * An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc.
     */
    actionId?: string;
    /**
     * An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch.
     */
    correlatedInvocationsId?: string;
    /**
     * The details for the tool invoking the requests.
     */
    toolDetails?: Schema$BuildBazelRemoteExecutionV2ToolDetails;
    /**
     * An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test.
     */
    toolInvocationId?: string;
  }
  /**
   * A `ResultsCachePolicy` is used for fine-grained control over how action outputs are stored in the CAS and Action Cache.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ResultsCachePolicy {
    /**
     * The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server.  The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.
     */
    priority?: number;
  }
  /**
   * A response message for Capabilities.GetCapabilities.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ServerCapabilities {
    /**
     * Capabilities of the remote cache system.
     */
    cacheCapabilities?: Schema$BuildBazelRemoteExecutionV2CacheCapabilities;
    /**
     * Earliest RE API version supported, including deprecated versions.
     */
    deprecatedApiVersion?: Schema$BuildBazelSemverSemVer;
    /**
     * Capabilities of the remote execution system.
     */
    executionCapabilities?: Schema$BuildBazelRemoteExecutionV2ExecutionCapabilities;
    /**
     * Latest RE API version supported.
     */
    highApiVersion?: Schema$BuildBazelSemverSemVer;
    /**
     * Earliest non-deprecated RE API version supported.
     */
    lowApiVersion?: Schema$BuildBazelSemverSemVer;
  }
  /**
   * A `SymlinkNode` represents a symbolic link.
   */
  export interface Schema$BuildBazelRemoteExecutionV2SymlinkNode {
    /**
     * The name of the symlink.
     */
    name?: string;
    /**
     * The target path of the symlink. The path separator is a forward slash `/`. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with `/`. Support for absolute paths can be checked using the Capabilities API. The canonical form forbids the substrings `/./` and `//` in the target path. `..` components are allowed anywhere in the target path.
     */
    target?: string;
  }
  /**
   * Details for the tool used to call the API.
   */
  export interface Schema$BuildBazelRemoteExecutionV2ToolDetails {
    /**
     * Name of the tool, e.g. bazel.
     */
    toolName?: string;
    /**
     * Version of the tool used for the request, e.g. 5.0.3.
     */
    toolVersion?: string;
  }
  /**
   * A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message.
   */
  export interface Schema$BuildBazelRemoteExecutionV2Tree {
    /**
     * All the child directories: the directories referred to by the root and, recursively, all its children. In order to reconstruct the directory tree, the client must take the digests of each of the child directories and then build up a tree starting from the `root`.
     */
    children?: Schema$BuildBazelRemoteExecutionV2Directory[];
    /**
     * The root directory in the tree.
     */
    root?: Schema$BuildBazelRemoteExecutionV2Directory;
  }
  /**
   * A request message for WaitExecution.
   */
  export interface Schema$BuildBazelRemoteExecutionV2WaitExecutionRequest {}
  /**
   * The full version of a given tool.
   */
  export interface Schema$BuildBazelSemverSemVer {
    /**
     * The major version, e.g 10 for 10.2.3.
     */
    major?: number;
    /**
     * The minor version, e.g. 2 for 10.2.3.
     */
    minor?: number;
    /**
     * The patch version, e.g 3 for 10.2.3.
     */
    patch?: number;
    /**
     * The pre-release version. Either this field or major/minor/patch fields must be filled. They are mutually exclusive. Pre-release versions are assumed to be earlier than any released versions.
     */
    prerelease?: string;
  }
  /**
   * CommandDuration contains the various duration metrics tracked when a bot performs a command.
   */
  export interface Schema$GoogleDevtoolsRemotebuildbotCommandDurations {
    /**
     * The time spent preparing the command to be run in a Docker container (includes pulling the Docker image, if necessary).
     */
    dockerPrep?: string;
    /**
     * The time spent downloading the input files and constructing the working directory.
     */
    download?: string;
    /**
     * The time spent executing the command (i.e., doing useful work).
     */
    execution?: string;
    /**
     * The timestamp when preparation is done and bot starts downloading files.
     */
    isoPrepDone?: string;
    /**
     * The time spent completing the command, in total.
     */
    overall?: string;
    /**
     * The time spent uploading the stdout logs.
     */
    stdout?: string;
    /**
     * The time spent uploading the output files.
     */
    upload?: string;
  }
  /**
   * CommandEvents contains counters for the number of warnings and errors that occurred during the execution of a command.
   */
  export interface Schema$GoogleDevtoolsRemotebuildbotCommandEvents {
    /**
     * Indicates whether we are using a cached Docker image (true) or had to pull the Docker image (false) for this command.
     */
    dockerCacheHit?: boolean;
    /**
     * The input cache miss ratio.
     */
    inputCacheMiss?: number;
    /**
     * The number of errors reported.
     */
    numErrors?: string;
    /**
     * The number of warnings reported.
     */
    numWarnings?: string;
  }
  /**
   * The request used for `CreateInstance`.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest {
    /**
     * Specifies the instance to create. The name in the instance, if specified in the instance, is ignored.
     */
    instance?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance;
    /**
     * ID of the created instance. A valid `instance_id` must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
     */
    instanceId?: string;
    /**
     * Resource name of the project containing the instance. Format: `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  /**
   * The request used for `CreateWorkerPool`.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest {
    /**
     * Resource name of the instance in which to create the new worker pool. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
     */
    parent?: string;
    /**
     * ID of the created worker pool. A valid pool ID must: be 6-50 characters long, contain only lowercase letters, digits, hyphens and underscores, start with a lowercase letter, and end with a lowercase letter or a digit.
     */
    poolId?: string;
    /**
     * Specifies the worker pool to create. The name in the worker pool, if specified, is ignored.
     */
    workerPool?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
  }
  /**
   * The request used for `DeleteInstance`.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteInstanceRequest {
    /**
     * Name of the instance to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
     */
    name?: string;
  }
  /**
   * The request used for DeleteWorkerPool.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaDeleteWorkerPoolRequest {
    /**
     * Name of the worker pool to delete. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
     */
    name?: string;
  }
  /**
   * The request used for `GetInstance`.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetInstanceRequest {
    /**
     * Name of the instance to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
     */
    name?: string;
  }
  /**
   * The request used for GetWorkerPool.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaGetWorkerPoolRequest {
    /**
     * Name of the worker pool to retrieve. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`.
     */
    name?: string;
  }
  /**
   * Instance conceptually encapsulates all Remote Build Execution resources for remote builds. An instance consists of storage and compute resources (for example, `ContentAddressableStorage`, `ActionCache`, `WorkerPools`) used for running remote builds. All Remote Build Execution API calls are scoped to an instance.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance {
    /**
     * The location is a GCP region. Currently only `us-central1` is supported.
     */
    location?: string;
    /**
     * Output only. Whether stack driver logging is enabled for the instance.
     */
    loggingEnabled?: boolean;
    /**
     * Output only. Instance resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`. Name should not be populated when creating an instance since it is provided in the `instance_id` field.
     */
    name?: string;
    /**
     * Output only. State of the instance.
     */
    state?: string;
  }
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesRequest {
    /**
     * Resource name of the project. Format: `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse {
    /**
     * The list of instances in a given project.
     */
    instances?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[];
  }
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsRequest {
    /**
     * Resource name of the instance. Format: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]`.
     */
    parent?: string;
  }
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse {
    /**
     * The list of worker pools in a given instance.
     */
    workerPools?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[];
  }
  /**
   * The request used for UpdateWorkerPool.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest {
    /**
     * The update mask applies to worker_pool. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If an empty update_mask is provided, only the non-default valued field in the worker pool field will be updated. Note that in order to update a field to the default value (zero, false, empty string) an explicit update_mask must be provided.
     */
    updateMask?: string;
    /**
     * Specifies the worker pool to update.
     */
    workerPool?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool;
  }
  /**
   * Defines the configuration to be used for a creating workers in the worker pool.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig {
    /**
     * Required. Size of the disk attached to the worker, in GB. See https://cloud.google.com/compute/docs/disks/
     */
    diskSizeGb?: string;
    /**
     * Required. Disk Type to use for the worker. See [Storage options](https://cloud.google.com/compute/docs/disks/#introduction). Currently only `pd-standard` is supported.
     */
    diskType?: string;
    /**
     * Required. Machine type of the worker, such as `n1-standard-2`. See https://cloud.google.com/compute/docs/machine-types for a list of supported machine types. Note that `f1-micro` and `g1-small` are not yet supported.
     */
    machineType?: string;
    /**
     * Minimum CPU platform to use when creating the worker. See [CPU Platforms](https://cloud.google.com/compute/docs/cpu-platforms).
     */
    minCpuPlatform?: string;
    /**
     * Determines whether the worker is reserved (equivalent to a Compute Engine on-demand VM and therefore won&#39;t be preempted). See [Preemptible VMs](https://cloud.google.com/preemptible-vms/) for more details.
     */
    reserved?: boolean;
  }
  /**
   * A worker pool resource in the Remote Build Execution API.
   */
  export interface Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool {
    /**
     * WorkerPool resource name formatted as: `projects/[PROJECT_ID]/instances/[INSTANCE_ID]/workerpools/[POOL_ID]`. name should not be populated when creating a worker pool since it is provided in the `poolId` field.
     */
    name?: string;
    /**
     * Output only. State of the worker pool.
     */
    state?: string;
    /**
     * Specifies the properties, such as machine type and disk size, used for creating workers in a worker pool.
     */
    workerConfig?: Schema$GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig;
    /**
     * The desired number of workers in the worker pool. Must be a value between 0 and 1000.
     */
    workerCount?: string;
  }
  /**
   * An ActionResult represents the result of an Action being run.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testActionResult {
    /**
     * The exit code of the command.
     */
    exitCode?: number;
    /**
     * The output directories of the action. For each output directory requested in the `output_directories` field of the Action, if the corresponding directory existed after the action completed, a single entry will be present in the output list, which will contain the digest of a Tree message containing the directory tree, and the path equal exactly to the corresponding Action output_directories member. As an example, suppose the Action had an output directory `a/b/dir` and the execution produced the following contents in `a/b/dir`: a file named `bar` and a directory named `foo` with an executable file named `baz`. Then, output_directory will contain (hashes shortened for readability):  ```json // OutputDirectory proto: {   path: &quot;a/b/dir&quot;   tree_digest: {     hash: &quot;4a73bc9d03...&quot;,     size: 55   } } // Tree proto with hash &quot;4a73bc9d03...&quot; and size 55: {   root: {     files: [       {         name: &quot;bar&quot;,         digest: {           hash: &quot;4a73bc9d03...&quot;,           size: 65534         }       }     ],     directories: [       {         name: &quot;foo&quot;,         digest: {           hash: &quot;4cf2eda940...&quot;,           size: 43         }       }     ]   }   children : {     // (Directory proto with hash &quot;4cf2eda940...&quot; and size 43)     files: [       {         name: &quot;baz&quot;,         digest: {           hash: &quot;b2c941073e...&quot;,           size: 1294,         },         is_executable: true       }     ]   } } ```
     */
    outputDirectories?: Schema$GoogleDevtoolsRemoteexecutionV1testOutputDirectory[];
    /**
     * The output files of the action. For each output file requested in the `output_files` field of the Action, if the corresponding file existed after the action completed, a single entry will be present in the output list.  If the action does not produce the requested output, or produces a directory where a regular file is expected or vice versa, then that output will be omitted from the list. The server is free to arrange the output list as desired; clients MUST NOT assume that the output list is sorted.
     */
    outputFiles?: Schema$GoogleDevtoolsRemoteexecutionV1testOutputFile[];
    /**
     * The digest for a blob containing the standard error of the action, which can be retrieved from the ContentAddressableStorage. See `stderr_raw` for when this will be set.
     */
    stderrDigest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * The standard error buffer of the action. The server will determine, based on the size of the buffer, whether to return it in raw form or to return a digest in `stderr_digest` that points to the buffer. If neither is set, then the buffer is empty. The client SHOULD NOT assume it will get one of the raw buffer or a digest on any given request and should be prepared to handle either.
     */
    stderrRaw?: string;
    /**
     * The digest for a blob containing the standard output of the action, which can be retrieved from the ContentAddressableStorage. See `stdout_raw` for when this will be set.
     */
    stdoutDigest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * The standard output buffer of the action. The server will determine, based on the size of the buffer, whether to return it in raw form or to return a digest in `stdout_digest` that points to the buffer. If neither is set, then the buffer is empty. The client SHOULD NOT assume it will get one of the raw buffer or a digest on any given request and should be prepared to handle either.
     */
    stdoutRaw?: string;
  }
  /**
   * A `Command` is the actual command executed by a worker running an Action.  Except as otherwise required, the environment (such as which system libraries or binaries are available, and what filesystems are mounted where) is defined by and specific to the implementation of the remote execution API.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testCommand {
    /**
     * The arguments to the command. The first argument must be the path to the executable, which must be either a relative path, in which case it is evaluated with respect to the input root, or an absolute path.  The working directory will always be the input root.
     */
    arguments?: string[];
    /**
     * The environment variables to set when running the program. The worker may provide its own default environment variables; these defaults can be overridden using this field. Additional variables can also be specified.  In order to ensure that equivalent `Command`s always hash to the same value, the environment variables MUST be lexicographically sorted by name. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes.
     */
    environmentVariables?: Schema$GoogleDevtoolsRemoteexecutionV1testCommandEnvironmentVariable[];
  }
  /**
   * An `EnvironmentVariable` is one variable to set in the running program&#39;s environment.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testCommandEnvironmentVariable {
    /**
     * The variable name.
     */
    name?: string;
    /**
     * The variable value.
     */
    value?: string;
  }
  /**
   * A content digest. A digest for a given blob consists of the size of the blob and its hash. The hash algorithm to use is defined by the server, but servers SHOULD use SHA-256.  The size is considered to be an integral part of the digest and cannot be separated. That is, even if the `hash` field is correctly specified but `size_bytes` is not, the server MUST reject the request.  The reason for including the size in the digest is as follows: in a great many cases, the server needs to know the size of the blob it is about to work with prior to starting an operation with it, such as flattening Merkle tree structures or streaming it to a worker. Technically, the server could implement a separate metadata store, but this results in a significantly more complicated implementation as opposed to having the client specify the size up-front (or storing the size along with the digest in every message where digests are embedded). This does mean that the API leaks some implementation details of (what we consider to be) a reasonable server implementation, but we consider this to be a worthwhile tradeoff.  When a `Digest` is used to refer to a proto message, it always refers to the message in binary encoded form. To ensure consistent hashing, clients and servers MUST ensure that they serialize messages according to the following rules, even if there are alternate valid encodings for the same message. - Fields are serialized in tag order. - There are no unknown fields. - There are no duplicate fields. - Fields are serialized according to the default semantics for their type.  Most protocol buffer implementations will always follow these rules when serializing, but care should be taken to avoid shortcuts. For instance, concatenating two messages to merge them may produce duplicate fields.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testDigest {
    /**
     * The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     */
    hash?: string;
    /**
     * The size of the blob, in bytes.
     */
    sizeBytes?: string;
  }
  /**
   * A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes and DirectoryNodes. Each `Node` contains its name in the directory, the digest of its content (either a file blob or a `Directory` proto), as well as possibly some metadata about the file or directory.  In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`:   - Every child in the directory must have a path of exactly one segment.     Multiple levels of directory hierarchy may not be collapsed.   - Each child in the directory must have a unique path segment (file name).   - The files and directories in the directory must each be sorted in     lexicographical order by path. The path strings must be sorted by code     point, equivalently, by UTF-8 bytes.  A `Directory` that obeys the restrictions is said to be in canonical form.  As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability):  ```json // (Directory proto) {   files: [     {       name: &quot;bar&quot;,       digest: {         hash: &quot;4a73bc9d03...&quot;,         size: 65534       }     }   ],   directories: [     {       name: &quot;foo&quot;,       digest: {         hash: &quot;4cf2eda940...&quot;,         size: 43       }     }   ] }  // (Directory proto with hash &quot;4cf2eda940...&quot; and size 43) {   files: [     {       name: &quot;baz&quot;,       digest: {         hash: &quot;b2c941073e...&quot;,         size: 1294,       },       is_executable: true     }   ] } ```
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testDirectory {
    /**
     * The subdirectories in the directory.
     */
    directories?: Schema$GoogleDevtoolsRemoteexecutionV1testDirectoryNode[];
    /**
     * The files in the directory.
     */
    files?: Schema$GoogleDevtoolsRemoteexecutionV1testFileNode[];
  }
  /**
   * A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testDirectoryNode {
    /**
     * The digest of the Directory object represented. See Digest for information about how to take the digest of a proto message.
     */
    digest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * The name of the directory.
     */
    name?: string;
  }
  /**
   * Metadata about an ongoing execution, which will be contained in the metadata field of the Operation.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testExecuteOperationMetadata {
    /**
     * The digest of the Action being executed.
     */
    actionDigest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    stage?: string;
    /**
     * If set, the client can use this name with ByteStream.Read to stream the standard error.
     */
    stderrStreamName?: string;
    /**
     * If set, the client can use this name with ByteStream.Read to stream the standard output.
     */
    stdoutStreamName?: string;
  }
  /**
   * The response message for Execution.Execute, which will be contained in the response field of the Operation.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testExecuteResponse {
    /**
     * True if the result was served from cache, false if it was executed.
     */
    cachedResult?: boolean;
    /**
     * The result of the action.
     */
    result?: Schema$GoogleDevtoolsRemoteexecutionV1testActionResult;
    /**
     * An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker&#39;s setup phase. The keys SHOULD be human readable so that a client can display them to a user.
     */
    serverLogs?: {
      [key: string]: Schema$GoogleDevtoolsRemoteexecutionV1testLogFile;
    };
    /**
     * If the status has a code other than `OK`, it indicates that the action did not finish execution. For example, if the operation times out during execution, the status will have a `DEADLINE_EXCEEDED` code. Servers MUST use this field for errors in execution, rather than the error field on the `Operation` object.  If the status code is other than `OK`, then the result MUST NOT be cached. For an error status, the `result` field is optional; the server may populate the output-, stdout-, and stderr-related fields if it has any information available, such as the stdout and stderr of a timed-out action.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * A `FileNode` represents a single file and associated metadata.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testFileNode {
    /**
     * The digest of the file&#39;s content.
     */
    digest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * True if file is executable, false otherwise.
     */
    isExecutable?: boolean;
    /**
     * The name of the file.
     */
    name?: string;
  }
  /**
   * A `LogFile` is a log stored in the CAS.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testLogFile {
    /**
     * The digest of the log contents.
     */
    digest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file.
     */
    humanReadable?: boolean;
  }
  /**
   * An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory&#39;s full contents rather than a single file.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testOutputDirectory {
    /**
     * DEPRECATED: This field is deprecated and should no longer be used.
     */
    digest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * The full path of the directory relative to the working directory. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory.
     */
    path?: string;
    /**
     * The digest of the encoded Tree proto containing the directory&#39;s contents.
     */
    treeDigest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
  }
  /**
   * An `OutputFile` is similar to a FileNode, but it is tailored for output as part of an `ActionResult`. It allows a full file path rather than only a name, and allows the server to include content inline.  `OutputFile` is binary-compatible with `FileNode`.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testOutputFile {
    /**
     * The raw content of the file.  This field may be used by the server to provide the content of a file inline in an ActionResult and avoid requiring that the client make a separate call to [ContentAddressableStorage.GetBlob] to retrieve it.  The client SHOULD NOT assume that it will get raw content with any request, and always be prepared to retrieve it via `digest`.
     */
    content?: string;
    /**
     * The digest of the file&#39;s content.
     */
    digest?: Schema$GoogleDevtoolsRemoteexecutionV1testDigest;
    /**
     * True if file is executable, false otherwise.
     */
    isExecutable?: boolean;
    /**
     * The full path of the file relative to the input root, including the filename. The path separator is a forward slash `/`. Since this is a relative path, it MUST NOT begin with a leading forward slash.
     */
    path?: string;
  }
  /**
   * An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization: name: google.devtools.remoteexecution.v1test.requestmetadata-bin contents: the base64 encoded binary RequestMetadata message.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testRequestMetadata {
    /**
     * An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc.
     */
    actionId?: string;
    /**
     * An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch.
     */
    correlatedInvocationsId?: string;
    /**
     * The details for the tool invoking the requests.
     */
    toolDetails?: Schema$GoogleDevtoolsRemoteexecutionV1testToolDetails;
    /**
     * An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test.
     */
    toolInvocationId?: string;
  }
  /**
   * Details for the tool used to call the API.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testToolDetails {
    /**
     * Name of the tool, e.g. bazel.
     */
    toolName?: string;
    /**
     * Version of the tool used for the request, e.g. 5.0.3.
     */
    toolVersion?: string;
  }
  /**
   * A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message.
   */
  export interface Schema$GoogleDevtoolsRemoteexecutionV1testTree {
    /**
     * All the child directories: the directories referred to by the root and, recursively, all its children. In order to reconstruct the directory tree, the client must take the digests of each of the child directories and then build up a tree starting from the `root`.
     */
    children?: Schema$GoogleDevtoolsRemoteexecutionV1testDirectory[];
    /**
     * The root directory in the tree.
     */
    root?: Schema$GoogleDevtoolsRemoteexecutionV1testDirectory;
  }
  /**
   * AdminTemp is a prelimiary set of administration tasks. It&#39;s called &quot;Temp&quot; because we do not yet know the best way to represent admin tasks; it&#39;s possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API.  This message (suitably marshalled into a protobuf.Any) can be used as the inline_assignment field in a lease; the lease assignment field should simply be `&quot;admin&quot;` in these cases.  This message is heavily based on Swarming administration tasks from the LUCI project (http://github.com/luci/luci-py/appengine/swarming).
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2AdminTemp {
    /**
     * The argument to the admin action; see `Command` for semantics.
     */
    arg?: string;
    /**
     * The admin action; see `Command` for legal values.
     */
    command?: string;
  }
  /**
   * Describes a blob of binary content with its digest.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2Blob {
    /**
     * The contents of the blob.
     */
    contents?: string;
    /**
     * The digest of the blob. This should be verified by the receiver.
     */
    digest?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest;
  }
  /**
   * DEPRECATED - use CommandResult instead. Describes the actual outputs from the task.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandOutputs {
    /**
     * exit_code is only fully reliable if the status&#39; code is OK. If the task exceeded its deadline or was cancelled, the process may still produce an exit code as it is cancelled, and this will be populated, but a successful (zero) is unlikely to be correct unless the status code is OK.
     */
    exitCode?: number;
    /**
     * The output files. The blob referenced by the digest should contain one of the following (implementation-dependent):    * A marshalled DirectoryMetadata of the returned filesystem    * A LUCI-style .isolated file
     */
    outputs?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest;
  }
  /**
   * DEPRECATED - use CommandResult instead. Can be used as part of CompleteRequest.metadata, or are part of a more sophisticated message.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandOverhead {
    /**
     * The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time.
     */
    duration?: string;
    /**
     * The amount of time *not* spent executing the command (ie uploading/downloading files).
     */
    overhead?: string;
  }
  /**
   * All information about the execution of a command, suitable for providing as the Bots interface&#39;s `Lease.result` field.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandResult {
    /**
     * The elapsed time between calling Accept and Complete. The server will also have its own idea of what this should be, but this excludes the overhead of the RPCs and the bot response time.
     */
    duration?: string;
    /**
     * The exit code of the process. An exit code of &quot;0&quot; should only be trusted if `status` has a code of OK (otherwise it may simply be unset).
     */
    exitCode?: number;
    /**
     * Implementation-dependent metadata about the task. Both servers and bots may define messages which can be encoded here; bots are free to provide metadata in multiple formats, and servers are free to choose one or more of the values to process and ignore others. In particular, it is *not* considered an error for the bot to provide the server with a field that it doesn&#39;t know about.
     */
    metadata?: Array<{[key: string]: any}>;
    /**
     * The output files. The blob referenced by the digest should contain one of the following (implementation-dependent):    * A marshalled DirectoryMetadata of the returned filesystem    * A LUCI-style .isolated file
     */
    outputs?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest;
    /**
     * The amount of time *not* spent executing the command (ie uploading/downloading files).
     */
    overhead?: string;
    /**
     * An overall status for the command. For example, if the command timed out, this might have a code of DEADLINE_EXCEEDED; if it was killed by the OS for memory exhaustion, it might have a code of RESOURCE_EXHAUSTED.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * Describes a shell-style task to execute, suitable for providing as the Bots interface&#39;s `Lease.payload` field.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandTask {
    /**
     * The expected outputs from the task.
     */
    expectedOutputs?: Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs;
    /**
     * The inputs to the task.
     */
    inputs?: Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs;
    /**
     * The timeouts of this task.
     */
    timeouts?: Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts;
  }
  /**
   * Describes the inputs to a shell-style task.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskInputs {
    /**
     * The command itself to run (e.g., argv).  This field should be passed directly to the underlying operating system, and so it must be sensible to that operating system. For example, on Windows, the first argument might be &quot;C:\Windows\System32\ping.exe&quot; - that is, using drive letters and backslashes. A command for a *nix system, on the other hand, would use forward slashes.  All other fields in the RWAPI must consistently use forward slashes, since those fields may be interpretted by both the service and the bot.
     */
    arguments?: string[];
    /**
     * All environment variables required by the task.
     */
    environmentVariables?: Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable[];
    /**
     * The input filesystem to be set up prior to the task beginning. The contents should be a repeated set of FileMetadata messages though other formats are allowed if better for the implementation (eg, a LUCI-style .isolated file).  This field is repeated since implementations might want to cache the metadata, in which case it may be useful to break up portions of the filesystem that change frequently (eg, specific input files) from those that don&#39;t (eg, standard header files).
     */
    files?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest[];
    /**
     * Inline contents for blobs expected to be needed by the bot to execute the task. For example, contents of entries in `files` or blobs that are indirectly referenced by an entry there.  The bot should check against this list before downloading required task inputs to reduce the number of communications between itself and the remote CAS server.
     */
    inlineBlobs?: Schema$GoogleDevtoolsRemoteworkersV1test2Blob[];
    /**
     * Directory from which a command is executed. It is a relative directory with respect to the bot&#39;s working directory (i.e., &quot;./&quot;). If it is non-empty, then it must exist under &quot;./&quot;. Otherwise, &quot;./&quot; will be used.
     */
    workingDirectory?: string;
  }
  /**
   * An environment variable required by this task.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskInputsEnvironmentVariable {
    /**
     * The envvar name.
     */
    name?: string;
    /**
     * The envvar value.
     */
    value?: string;
  }
  /**
   * Describes the expected outputs of the command.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskOutputs {
    /**
     * A list of expected directories, relative to the execution root. All paths MUST be delimited by forward slashes.
     */
    directories?: string[];
    /**
     * A list of expected files, relative to the execution root. All paths MUST be delimited by forward slashes.
     */
    files?: string[];
    /**
     * The destination to which any stderr should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API.
     */
    stderrDestination?: string;
    /**
     * The destination to which any stdout should be sent. The method by which the bot should send the stream contents to that destination is not defined in this API. As examples, the destination could be a file referenced in the `files` field in this message, or it could be a URI that must be written via the ByteStream API.
     */
    stdoutDestination?: string;
  }
  /**
   * Describes the timeouts associated with this task.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2CommandTaskTimeouts {
    /**
     * This specifies the maximum time that the task can run, excluding the time required to download inputs or upload outputs. That is, the worker will terminate the task if it runs longer than this.
     */
    execution?: string;
    /**
     * This specifies the maximum amount of time the task can be idle - that is, go without generating some output in either stdout or stderr. If the process is silent for more than the specified time, the worker will terminate the task.
     */
    idle?: string;
    /**
     * If the execution or IO timeouts are exceeded, the worker will try to gracefully terminate the task and return any existing logs. However, tasks may be hard-frozen in which case this process will fail. This timeout specifies how long to wait for a terminated task to shut down gracefully (e.g. via SIGTERM) before we bring down the hammer (e.g. SIGKILL on *nix, CTRL_BREAK_EVENT on Windows).
     */
    shutdown?: string;
  }
  /**
   * The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a &quot;digest.&quot; The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API&#39;s &quot;ContentAddressibleStorage&quot; interface.  In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2Digest {
    /**
     * A string-encoded hash (eg &quot;1a2b3c&quot;, not the byte array [0x1a, 0x2b, 0x3c]) using an implementation-defined hash algorithm (eg SHA-256).
     */
    hash?: string;
    /**
     * The size of the contents. While this is not strictly required as part of an identifier (after all, any given hash will have exactly one canonical size), it&#39;s useful in almost all cases when one might want to send or retrieve blobs of content and is included here for this reason.
     */
    sizeBytes?: string;
  }
  /**
   * The contents of a directory. Similar to the equivalent message in the Remote Execution API.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2Directory {
    /**
     * Any subdirectories
     */
    directories?: Schema$GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata[];
    /**
     * The files in this directory
     */
    files?: Schema$GoogleDevtoolsRemoteworkersV1test2FileMetadata[];
  }
  /**
   * The metadata for a directory. Similar to the equivalent message in the Remote Execution API.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2DirectoryMetadata {
    /**
     * A pointer to the contents of the directory, in the form of a marshalled Directory message.
     */
    digest?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest;
    /**
     * The path of the directory, as in FileMetadata.path.
     */
    path?: string;
  }
  /**
   * The metadata for a file. Similar to the equivalent message in the Remote Execution API.
   */
  export interface Schema$GoogleDevtoolsRemoteworkersV1test2FileMetadata {
    /**
     * If the file is small enough, its contents may also or alternatively be listed here.
     */
    contents?: string;
    /**
     * A pointer to the contents of the file. The method by which a client retrieves the contents from a CAS system is not defined here.
     */
    digest?: Schema$GoogleDevtoolsRemoteworkersV1test2Digest;
    /**
     * Properties of the file
     */
    isExecutable?: boolean;
    /**
     * The path of this file. If this message is part of the CommandOutputs.outputs fields, the path is relative to the execution root and must correspond to an entry in CommandTask.outputs.files. If this message is part of a Directory message, then the path is relative to the root of that directory. All paths MUST be delimited by forward slashes.
     */
    path?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any};
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any};
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). The error model is designed to be:  - Simple to use and understand for most users - Flexible enough to meet unexpected needs  # Overview  The `Status` message contains three pieces of data: error code, error message, and error details. The error code should be an enum value of google.rpc.Code, but it may accept additional error codes if needed.  The error message should be a developer-facing English message that helps developers *understand* and *resolve* the error. If a localized user-facing error message is needed, put the localized message in the error details or localize it in the client. The optional error details may contain arbitrary information about the error. There is a predefined set of error detail types in the package `google.rpc` that can be used for common error conditions.  # Language mapping  The `Status` message is the logical representation of the error model, but it is not necessarily the actual wire format. When the `Status` message is exposed in different client libraries and different wire protocols, it can be mapped differently. For example, it will likely be mapped to some exceptions in Java, but more likely mapped to some error codes in C.  # Other uses  The error model and the `Status` message can be used in a variety of environments, either with or without APIs, to provide a consistent developer experience across different environments.  Example uses of this error model include:  - Partial errors. If a service needs to return partial errors to the client,     it may embed the `Status` in the normal response to indicate the partial     errors.  - Workflow errors. A typical workflow has multiple steps. Each step may     have a `Status` message for error reporting.  - Batch operations. If a client uses batch request and batch response, the     `Status` message should be used directly inside batch response, one for     each error sub-response.  - Asynchronous operations. If an API call embeds asynchronous operation     results in its response, the status of those operations should be     represented directly using the `Status` message.  - Logging. If some API errors are stored in logs, the message `Status` could     be used directly after any stripping needed for security/privacy reasons.
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}>;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  export class Resource$Actionresults {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * remotebuildexecution.actionResults.get
     * @desc Retrieve a cached execution result.  Errors:  * `NOT_FOUND`: The requested `ActionResult` is not in the cache.
     * @alias remotebuildexecution.actionResults.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.hash The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {string} params.sizeBytes The size of the blob, in bytes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Actionresults$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildBazelRemoteExecutionV2ActionResult>;
    get(
      params: Params$Resource$Actionresults$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    get(
      params: Params$Resource$Actionresults$Get,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Actionresults$Get
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void | GaxiosPromise<Schema$BuildBazelRemoteExecutionV2ActionResult> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Actionresults$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Actionresults$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+instanceName}/actionResults/{hash}/{sizeBytes}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['instanceName', 'hash', 'sizeBytes'],
        pathParams: ['hash', 'instanceName', 'sizeBytes'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildBazelRemoteExecutionV2ActionResult>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BuildBazelRemoteExecutionV2ActionResult>(
          parameters
        );
      }
    }

    /**
     * remotebuildexecution.actionResults.update
     * @desc Upload a new execution result.  In order to allow the server to perform access control based on the type of action, and to assist with client debugging, the client MUST first upload the Action that produced the result, along with its Command, into the `ContentAddressableStorage`.  Errors:  * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in updating the   action result, such as a missing command or action. * `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the   entry to the cache.
     * @alias remotebuildexecution.actionResults.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.hash The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {integer=} params.resultsCachePolicy.priority The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server.  The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.
     * @param {string} params.sizeBytes The size of the blob, in bytes.
     * @param {().BuildBazelRemoteExecutionV2ActionResult} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Actionresults$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildBazelRemoteExecutionV2ActionResult>;
    update(
      params: Params$Resource$Actionresults$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    update(
      params: Params$Resource$Actionresults$Update,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    update(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Actionresults$Update
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BuildBazelRemoteExecutionV2ActionResult>,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ActionResult
      >
    ): void | GaxiosPromise<Schema$BuildBazelRemoteExecutionV2ActionResult> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Actionresults$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Actionresults$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+instanceName}/actionResults/{hash}/{sizeBytes}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['instanceName', 'hash', 'sizeBytes'],
        pathParams: ['hash', 'instanceName', 'sizeBytes'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildBazelRemoteExecutionV2ActionResult>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$BuildBazelRemoteExecutionV2ActionResult>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Actionresults$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     */
    hash?: string;
    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;
    /**
     * The size of the blob, in bytes.
     */
    sizeBytes?: string;
  }
  export interface Params$Resource$Actionresults$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     */
    hash?: string;
    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;
    /**
     * The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server.  The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.
     */
    'resultsCachePolicy.priority'?: number;
    /**
     * The size of the blob, in bytes.
     */
    sizeBytes?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2ActionResult;
  }

  export class Resource$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * remotebuildexecution.actions.execute
     * @desc Execute an action remotely.  In order to execute an action, the client must first upload all of the inputs, the Command to run, and the Action into the ContentAddressableStorage. It then calls `Execute` with an `action_digest` referring to them. The server will run the action and eventually return the result.  The input `Action`'s fields MUST meet the various canonicalization requirements specified in the documentation for their types so that it has the same digest as other logically equivalent `Action`s. The server MAY enforce the requirements and return errors if a non-canonical input is received. It MAY also proceed without verifying some or all of the requirements, such as for performance reasons. If the server does not verify the requirement, then it will treat the `Action` as distinct from another logically equivalent action if they hash differently.  Returns a stream of google.longrunning.Operation messages describing the resulting execution, with eventual `response` ExecuteResponse. The `metadata` on the operation is of type ExecuteOperationMetadata.  If the client remains connected after the first response is returned after the server, then updates are streamed as if the client had called WaitExecution until the execution completes or the request reaches an error. The operation can also be queried using Operations API.  The server NEED NOT implement other methods or functionality of the Operations API.  Errors discovered during creation of the `Operation` will be reported as gRPC Status errors, while errors that occurred while running the action will be reported in the `status` field of the `ExecuteResponse`. The server MUST NOT set the `error` field of the `Operation` proto. The possible errors include:  * `INVALID_ARGUMENT`: One or more arguments are invalid. * `FAILED_PRECONDITION`: One or more errors occurred in setting up the   action requested, such as a missing input or command or no worker being   available. The client may be able to fix the errors and retry. * `RESOURCE_EXHAUSTED`: There is insufficient quota of some resource to run   the action. * `UNAVAILABLE`: Due to a transient condition, such as all workers being   occupied (and the server does not support a queue), the action could not   be started. The client should retry. * `INTERNAL`: An internal error occurred in the execution engine or the   worker. * `DEADLINE_EXCEEDED`: The execution timed out. * `CANCELLED`: The operation was cancelled by the client. This status is   only possible if the server implements the Operations API CancelOperation   method, and it was called for the current execution.  In the case of a missing input or command, the server SHOULD additionally send a PreconditionFailure error detail where, for each requested blob not present in the CAS, there is a `Violation` with a `type` of `MISSING` and a `subject` of `"blobs/{hash}/{size}"` indicating the digest of the missing blob.
     * @alias remotebuildexecution.actions.execute
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {().BuildBazelRemoteExecutionV2ExecuteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    execute(
      params?: Params$Resource$Actions$Execute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    execute(
      params: Params$Resource$Actions$Execute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    execute(
      params: Params$Resource$Actions$Execute,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    execute(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Actions$Execute
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback || {}) as Params$Resource$Actions$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Actions$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+instanceName}/actions:execute').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['instanceName'],
        pathParams: ['instanceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Actions$Execute extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2ExecuteRequest;
  }

  export class Resource$Blobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * remotebuildexecution.blobs.batchRead
     * @desc Download many blobs at once.  The server may enforce a limit of the combined total size of blobs to be downloaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or downloaded using the ByteStream API, as appropriate.  This request is equivalent to calling a Bytestream `Read` request on each individual blob, in parallel. The requests may succeed or fail independently.  Errors:  * `INVALID_ARGUMENT`: The client attempted to read more than the   server supported limit.  Every error on individual read will be returned in the corresponding digest status.
     * @alias remotebuildexecution.blobs.batchRead
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {().BuildBazelRemoteExecutionV2BatchReadBlobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchRead(
      params?: Params$Resource$Blobs$Batchread,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse>;
    batchRead(
      params: Params$Resource$Blobs$Batchread,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
          >,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
      >
    ): void;
    batchRead(
      params: Params$Resource$Blobs$Batchread,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
      >
    ): void;
    batchRead(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
      >
    ): void;
    batchRead(
      paramsOrCallback?:
        | Params$Resource$Blobs$Batchread
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
      >
    ): void | GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Blobs$Batchread;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blobs$Batchread;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+instanceName}/blobs:batchRead').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['instanceName'],
        pathParams: ['instanceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2BatchReadBlobsResponse
        >(parameters);
      }
    }

    /**
     * remotebuildexecution.blobs.batchUpdate
     * @desc Upload many blobs at once.  The server may enforce a limit of the combined total size of blobs to be uploaded using this API. This limit may be obtained using the Capabilities API. Requests exceeding the limit should either be split into smaller chunks or uploaded using the ByteStream API, as appropriate.  This request is equivalent to calling a Bytestream `Write` request on each individual blob, in parallel. The requests may succeed or fail independently.  Errors:  * `INVALID_ARGUMENT`: The client attempted to upload more than the   server supported limit.  Individual requests may return the following errors, additionally:  * `RESOURCE_EXHAUSTED`: There is insufficient disk quota to store the blob. * `INVALID_ARGUMENT`: The Digest does not match the provided data.
     * @alias remotebuildexecution.blobs.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {().BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
      params?: Params$Resource$Blobs$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
    >;
    batchUpdate(
      params: Params$Resource$Blobs$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
          >,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
      >
    ): void;
    batchUpdate(
      params: Params$Resource$Blobs$Batchupdate,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
      >
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
      >
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Blobs$Batchupdate
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
      >
    ): void | GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Blobs$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blobs$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+instanceName}/blobs:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['instanceName'],
        pathParams: ['instanceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsResponse
        >(parameters);
      }
    }

    /**
     * remotebuildexecution.blobs.findMissing
     * @desc Determine if blobs are present in the CAS.  Clients can use this API before uploading blobs to determine which ones are already present in the CAS and do not need to be uploaded again.  There are no method-specific errors.
     * @alias remotebuildexecution.blobs.findMissing
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {().BuildBazelRemoteExecutionV2FindMissingBlobsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    findMissing(
      params?: Params$Resource$Blobs$Findmissing,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
    >;
    findMissing(
      params: Params$Resource$Blobs$Findmissing,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
          >,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
      >
    ): void;
    findMissing(
      params: Params$Resource$Blobs$Findmissing,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
      >
    ): void;
    findMissing(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
      >
    ): void;
    findMissing(
      paramsOrCallback?:
        | Params$Resource$Blobs$Findmissing
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
      >
    ): void | GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Blobs$Findmissing;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blobs$Findmissing;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+instanceName}/blobs:findMissing').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['instanceName'],
        pathParams: ['instanceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2FindMissingBlobsResponse
        >(parameters);
      }
    }

    /**
     * remotebuildexecution.blobs.getTree
     * @desc Fetch the entire directory tree rooted at a node.  This request must be targeted at a Directory stored in the ContentAddressableStorage (CAS). The server will enumerate the `Directory` tree recursively and return every node descended from the root.  The GetTreeRequest.page_token parameter can be used to skip ahead in the stream (e.g. when retrying a partially completed and aborted request), by setting it to a value taken from GetTreeResponse.next_page_token of the last successfully processed GetTreeResponse).  The exact traversal order is unspecified and, unless retrieving subsequent pages from an earlier request, is not guaranteed to be stable across multiple invocations of `GetTree`.  If part of the tree is missing from the CAS, the server will return the portion present and omit the rest.  * `NOT_FOUND`: The requested tree root is not present in the CAS.
     * @alias remotebuildexecution.blobs.getTree
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.hash The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {integer=} params.pageSize A maximum page size to request. If present, the server will request no more than this many items. Regardless of whether a page size is specified, the server may place its own limit on the number of items to be returned and require the client to retrieve more items using a subsequent request.
     * @param {string=} params.pageToken A page token, which must be a value received in a previous GetTreeResponse. If present, the server will use it to return the following page of results.
     * @param {string} params.sizeBytes The size of the blob, in bytes.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getTree(
      params?: Params$Resource$Blobs$Gettree,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildBazelRemoteExecutionV2GetTreeResponse>;
    getTree(
      params: Params$Resource$Blobs$Gettree,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2GetTreeResponse
          >,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2GetTreeResponse
      >
    ): void;
    getTree(
      params: Params$Resource$Blobs$Gettree,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2GetTreeResponse
      >
    ): void;
    getTree(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2GetTreeResponse
      >
    ): void;
    getTree(
      paramsOrCallback?:
        | Params$Resource$Blobs$Gettree
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2GetTreeResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2GetTreeResponse
          >,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2GetTreeResponse
      >
    ): void | GaxiosPromise<Schema$BuildBazelRemoteExecutionV2GetTreeResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Blobs$Gettree;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Blobs$Gettree;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+instanceName}/blobs/{hash}/{sizeBytes}:getTree'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['instanceName', 'hash', 'sizeBytes'],
        pathParams: ['hash', 'instanceName', 'sizeBytes'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildBazelRemoteExecutionV2GetTreeResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2GetTreeResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Blobs$Batchread extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2BatchReadBlobsRequest;
  }
  export interface Params$Resource$Blobs$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2BatchUpdateBlobsRequest;
  }
  export interface Params$Resource$Blobs$Findmissing
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2FindMissingBlobsRequest;
  }
  export interface Params$Resource$Blobs$Gettree extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
     */
    hash?: string;
    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;
    /**
     * A maximum page size to request. If present, the server will request no more than this many items. Regardless of whether a page size is specified, the server may place its own limit on the number of items to be returned and require the client to retrieve more items using a subsequent request.
     */
    pageSize?: number;
    /**
     * A page token, which must be a value received in a previous GetTreeResponse. If present, the server will use it to return the following page of results.
     */
    pageToken?: string;
    /**
     * The size of the blob, in bytes.
     */
    sizeBytes?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * remotebuildexecution.operations.waitExecution
     * @desc Wait for an execution operation to complete. When the client initially makes the request, the server immediately responds with the current status of the execution. The server will leave the request stream open until the operation completes, and then respond with the completed operation. The server MAY choose to stream additional updates as execution progresses, such as to provide an update as to the state of the execution.
     * @alias remotebuildexecution.operations.waitExecution
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the Operation returned by Execute.
     * @param {().BuildBazelRemoteExecutionV2WaitExecutionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    waitExecution(
      params?: Params$Resource$Operations$Waitexecution,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    waitExecution(
      params: Params$Resource$Operations$Waitexecution,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    waitExecution(
      params: Params$Resource$Operations$Waitexecution,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    waitExecution(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    waitExecution(
      paramsOrCallback?:
        | Params$Resource$Operations$Waitexecution
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback?: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void | GaxiosPromise<Schema$GoogleLongrunningOperation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Waitexecution;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Waitexecution;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:waitExecution').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Waitexecution
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the Operation returned by Execute.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BuildBazelRemoteExecutionV2WaitExecutionRequest;
  }

  export class Resource$V2 {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * remotebuildexecution.getCapabilities
     * @desc GetCapabilities returns the server capabilities configuration.
     * @alias remotebuildexecution.getCapabilities
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceName The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getCapabilities(
      params?: Params$Resource$V2$Getcapabilities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BuildBazelRemoteExecutionV2ServerCapabilities>;
    getCapabilities(
      params: Params$Resource$V2$Getcapabilities,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2ServerCapabilities
          >,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ServerCapabilities
      >
    ): void;
    getCapabilities(
      params: Params$Resource$V2$Getcapabilities,
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ServerCapabilities
      >
    ): void;
    getCapabilities(
      callback: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ServerCapabilities
      >
    ): void;
    getCapabilities(
      paramsOrCallback?:
        | Params$Resource$V2$Getcapabilities
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2ServerCapabilities
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$BuildBazelRemoteExecutionV2ServerCapabilities
          >,
      callback?: BodyResponseCallback<
        Schema$BuildBazelRemoteExecutionV2ServerCapabilities
      >
    ): void | GaxiosPromise<
      Schema$BuildBazelRemoteExecutionV2ServerCapabilities
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V2$Getcapabilities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V2$Getcapabilities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://remotebuildexecution.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+instanceName}/capabilities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['instanceName'],
        pathParams: ['instanceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BuildBazelRemoteExecutionV2ServerCapabilities>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$BuildBazelRemoteExecutionV2ServerCapabilities
        >(parameters);
      }
    }
  }

  export interface Params$Resource$V2$Getcapabilities
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
     */
    instanceName?: string;
  }
}
