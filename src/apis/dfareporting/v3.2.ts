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

export namespace dfareporting_v3_2 {
  export interface Options extends GlobalOptions {
    version: 'v3_2';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * DCM/DFA Reporting And Trafficking API
   *
   * Manages your DoubleClick Campaign Manager ad campaigns and reports.
   *
   * @example
   * const {google} = require('googleapis');
   * const dfareporting = google.dfareporting('v3.2');
   *
   * @namespace dfareporting
   * @type {Function}
   * @version v3.2
   * @variation v3.2
   * @param {object=} options Options for Dfareporting
   */
  export class Dfareporting {
    context: APIRequestContext;
    accountActiveAdSummaries: Resource$Accountactiveadsummaries;
    accountPermissionGroups: Resource$Accountpermissiongroups;
    accountPermissions: Resource$Accountpermissions;
    accounts: Resource$Accounts;
    accountUserProfiles: Resource$Accountuserprofiles;
    ads: Resource$Ads;
    advertiserGroups: Resource$Advertisergroups;
    advertiserLandingPages: Resource$Advertiserlandingpages;
    advertisers: Resource$Advertisers;
    browsers: Resource$Browsers;
    campaignCreativeAssociations: Resource$Campaigncreativeassociations;
    campaigns: Resource$Campaigns;
    changeLogs: Resource$Changelogs;
    cities: Resource$Cities;
    connectionTypes: Resource$Connectiontypes;
    contentCategories: Resource$Contentcategories;
    conversions: Resource$Conversions;
    countries: Resource$Countries;
    creativeAssets: Resource$Creativeassets;
    creativeFields: Resource$Creativefields;
    creativeFieldValues: Resource$Creativefieldvalues;
    creativeGroups: Resource$Creativegroups;
    creatives: Resource$Creatives;
    dimensionValues: Resource$Dimensionvalues;
    directorySiteContacts: Resource$Directorysitecontacts;
    directorySites: Resource$Directorysites;
    dynamicTargetingKeys: Resource$Dynamictargetingkeys;
    eventTags: Resource$Eventtags;
    files: Resource$Files;
    floodlightActivities: Resource$Floodlightactivities;
    floodlightActivityGroups: Resource$Floodlightactivitygroups;
    floodlightConfigurations: Resource$Floodlightconfigurations;
    inventoryItems: Resource$Inventoryitems;
    languages: Resource$Languages;
    metros: Resource$Metros;
    mobileApps: Resource$Mobileapps;
    mobileCarriers: Resource$Mobilecarriers;
    operatingSystems: Resource$Operatingsystems;
    operatingSystemVersions: Resource$Operatingsystemversions;
    orderDocuments: Resource$Orderdocuments;
    orders: Resource$Orders;
    placementGroups: Resource$Placementgroups;
    placements: Resource$Placements;
    placementStrategies: Resource$Placementstrategies;
    platformTypes: Resource$Platformtypes;
    postalCodes: Resource$Postalcodes;
    projects: Resource$Projects;
    regions: Resource$Regions;
    remarketingLists: Resource$Remarketinglists;
    remarketingListShares: Resource$Remarketinglistshares;
    reports: Resource$Reports;
    sites: Resource$Sites;
    sizes: Resource$Sizes;
    subaccounts: Resource$Subaccounts;
    targetableRemarketingLists: Resource$Targetableremarketinglists;
    targetingTemplates: Resource$Targetingtemplates;
    userProfiles: Resource$Userprofiles;
    userRolePermissionGroups: Resource$Userrolepermissiongroups;
    userRolePermissions: Resource$Userrolepermissions;
    userRoles: Resource$Userroles;
    videoFormats: Resource$Videoformats;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accountActiveAdSummaries = new Resource$Accountactiveadsummaries(
        this.context
      );
      this.accountPermissionGroups = new Resource$Accountpermissiongroups(
        this.context
      );
      this.accountPermissions = new Resource$Accountpermissions(this.context);
      this.accounts = new Resource$Accounts(this.context);
      this.accountUserProfiles = new Resource$Accountuserprofiles(this.context);
      this.ads = new Resource$Ads(this.context);
      this.advertiserGroups = new Resource$Advertisergroups(this.context);
      this.advertiserLandingPages = new Resource$Advertiserlandingpages(
        this.context
      );
      this.advertisers = new Resource$Advertisers(this.context);
      this.browsers = new Resource$Browsers(this.context);
      this.campaignCreativeAssociations = new Resource$Campaigncreativeassociations(
        this.context
      );
      this.campaigns = new Resource$Campaigns(this.context);
      this.changeLogs = new Resource$Changelogs(this.context);
      this.cities = new Resource$Cities(this.context);
      this.connectionTypes = new Resource$Connectiontypes(this.context);
      this.contentCategories = new Resource$Contentcategories(this.context);
      this.conversions = new Resource$Conversions(this.context);
      this.countries = new Resource$Countries(this.context);
      this.creativeAssets = new Resource$Creativeassets(this.context);
      this.creativeFields = new Resource$Creativefields(this.context);
      this.creativeFieldValues = new Resource$Creativefieldvalues(this.context);
      this.creativeGroups = new Resource$Creativegroups(this.context);
      this.creatives = new Resource$Creatives(this.context);
      this.dimensionValues = new Resource$Dimensionvalues(this.context);
      this.directorySiteContacts = new Resource$Directorysitecontacts(
        this.context
      );
      this.directorySites = new Resource$Directorysites(this.context);
      this.dynamicTargetingKeys = new Resource$Dynamictargetingkeys(
        this.context
      );
      this.eventTags = new Resource$Eventtags(this.context);
      this.files = new Resource$Files(this.context);
      this.floodlightActivities = new Resource$Floodlightactivities(
        this.context
      );
      this.floodlightActivityGroups = new Resource$Floodlightactivitygroups(
        this.context
      );
      this.floodlightConfigurations = new Resource$Floodlightconfigurations(
        this.context
      );
      this.inventoryItems = new Resource$Inventoryitems(this.context);
      this.languages = new Resource$Languages(this.context);
      this.metros = new Resource$Metros(this.context);
      this.mobileApps = new Resource$Mobileapps(this.context);
      this.mobileCarriers = new Resource$Mobilecarriers(this.context);
      this.operatingSystems = new Resource$Operatingsystems(this.context);
      this.operatingSystemVersions = new Resource$Operatingsystemversions(
        this.context
      );
      this.orderDocuments = new Resource$Orderdocuments(this.context);
      this.orders = new Resource$Orders(this.context);
      this.placementGroups = new Resource$Placementgroups(this.context);
      this.placements = new Resource$Placements(this.context);
      this.placementStrategies = new Resource$Placementstrategies(this.context);
      this.platformTypes = new Resource$Platformtypes(this.context);
      this.postalCodes = new Resource$Postalcodes(this.context);
      this.projects = new Resource$Projects(this.context);
      this.regions = new Resource$Regions(this.context);
      this.remarketingLists = new Resource$Remarketinglists(this.context);
      this.remarketingListShares = new Resource$Remarketinglistshares(
        this.context
      );
      this.reports = new Resource$Reports(this.context);
      this.sites = new Resource$Sites(this.context);
      this.sizes = new Resource$Sizes(this.context);
      this.subaccounts = new Resource$Subaccounts(this.context);
      this.targetableRemarketingLists = new Resource$Targetableremarketinglists(
        this.context
      );
      this.targetingTemplates = new Resource$Targetingtemplates(this.context);
      this.userProfiles = new Resource$Userprofiles(this.context);
      this.userRolePermissionGroups = new Resource$Userrolepermissiongroups(
        this.context
      );
      this.userRolePermissions = new Resource$Userrolepermissions(this.context);
      this.userRoles = new Resource$Userroles(this.context);
      this.videoFormats = new Resource$Videoformats(this.context);
    }
  }

  /**
   * Contains properties of a Campaign Manager account.
   */
  export interface Schema$Account {
    /**
     * Account permissions assigned to this account.
     */
    accountPermissionIds?: string[];
    /**
     * Profile for this account. This is a read-only field that can be left blank.
     */
    accountProfile?: string;
    /**
     * Whether this account is active.
     */
    active?: boolean;
    /**
     * Maximum number of active ads allowed for this account.
     */
    activeAdsLimitTier?: string;
    /**
     * Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
     */
    activeViewOptOut?: boolean;
    /**
     * User role permissions available to the user roles of this account.
     */
    availablePermissionIds?: string[];
    /**
     * ID of the country associated with this account.
     */
    countryId?: string;
    /**
     * ID of currency associated with this account. This is a required field. Acceptable values are:  - &quot;1&quot; for USD  - &quot;2&quot; for GBP  - &quot;3&quot; for ESP  - &quot;4&quot; for SEK  - &quot;5&quot; for CAD  - &quot;6&quot; for JPY  - &quot;7&quot; for DEM  - &quot;8&quot; for AUD  - &quot;9&quot; for FRF  - &quot;10&quot; for ITL  - &quot;11&quot; for DKK  - &quot;12&quot; for NOK  - &quot;13&quot; for FIM  - &quot;14&quot; for ZAR  - &quot;15&quot; for IEP  - &quot;16&quot; for NLG  - &quot;17&quot; for EUR  - &quot;18&quot; for KRW  - &quot;19&quot; for TWD  - &quot;20&quot; for SGD  - &quot;21&quot; for CNY  - &quot;22&quot; for HKD  - &quot;23&quot; for NZD  - &quot;24&quot; for MYR  - &quot;25&quot; for BRL  - &quot;26&quot; for PTE  - &quot;27&quot; for MXP  - &quot;28&quot; for CLP  - &quot;29&quot; for TRY  - &quot;30&quot; for ARS  - &quot;31&quot; for PEN  - &quot;32&quot; for ILS  - &quot;33&quot; for CHF  - &quot;34&quot; for VEF  - &quot;35&quot; for COP  - &quot;36&quot; for GTQ  - &quot;37&quot; for PLN  - &quot;39&quot; for INR  - &quot;40&quot; for THB  - &quot;41&quot; for IDR  - &quot;42&quot; for CZK  - &quot;43&quot; for RON  - &quot;44&quot; for HUF  - &quot;45&quot; for RUB  - &quot;46&quot; for AED  - &quot;47&quot; for BGN  - &quot;48&quot; for HRK  - &quot;49&quot; for MXN  - &quot;50&quot; for NGN
     */
    currencyId?: string;
    /**
     * Default placement dimensions for this account.
     */
    defaultCreativeSizeId?: string;
    /**
     * Description of this account.
     */
    description?: string;
    /**
     * ID of this account. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#account&quot;.
     */
    kind?: string;
    /**
     * Locale of this account. Acceptable values are:  - &quot;cs&quot; (Czech)  - &quot;de&quot; (German)  - &quot;en&quot; (English)  - &quot;en-GB&quot; (English United Kingdom)  - &quot;es&quot; (Spanish)  - &quot;fr&quot; (French)  - &quot;it&quot; (Italian)  - &quot;ja&quot; (Japanese)  - &quot;ko&quot; (Korean)  - &quot;pl&quot; (Polish)  - &quot;pt-BR&quot; (Portuguese Brazil)  - &quot;ru&quot; (Russian)  - &quot;sv&quot; (Swedish)  - &quot;tr&quot; (Turkish)  - &quot;zh-CN&quot; (Chinese Simplified)  - &quot;zh-TW&quot; (Chinese Traditional)
     */
    locale?: string;
    /**
     * Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
     */
    maximumImageSize?: string;
    /**
     * Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
     */
    name?: string;
    /**
     * Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
     */
    nielsenOcrEnabled?: boolean;
    /**
     * Reporting configuration of this account.
     */
    reportsConfiguration?: Schema$ReportsConfiguration;
    /**
     * Share Path to Conversion reports with Twitter.
     */
    shareReportsWithTwitter?: boolean;
    /**
     * File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.
     */
    teaserSizeLimit?: string;
  }
  /**
   * Gets a summary of active ads in an account.
   */
  export interface Schema$AccountActiveAdSummary {
    /**
     * ID of the account.
     */
    accountId?: string;
    /**
     * Ads that have been activated for the account
     */
    activeAds?: string;
    /**
     * Maximum number of active ads allowed for the account.
     */
    activeAdsLimitTier?: string;
    /**
     * Ads that can be activated for the account.
     */
    availableAds?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountActiveAdSummary&quot;.
     */
    kind?: string;
  }
  /**
   * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
   */
  export interface Schema$AccountPermission {
    /**
     * Account profiles associated with this account permission.  Possible values are: - &quot;ACCOUNT_PROFILE_BASIC&quot; - &quot;ACCOUNT_PROFILE_STANDARD&quot;
     */
    accountProfiles?: string[];
    /**
     * ID of this account permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountPermission&quot;.
     */
    kind?: string;
    /**
     * Administrative level required to enable this account permission.
     */
    level?: string;
    /**
     * Name of this account permission.
     */
    name?: string;
    /**
     * Permission group of this account permission.
     */
    permissionGroupId?: string;
  }
  /**
   * AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
   */
  export interface Schema$AccountPermissionGroup {
    /**
     * ID of this account permission group.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountPermissionGroup&quot;.
     */
    kind?: string;
    /**
     * Name of this account permission group.
     */
    name?: string;
  }
  /**
   * Account Permission Group List Response
   */
  export interface Schema$AccountPermissionGroupsListResponse {
    /**
     * Account permission group collection.
     */
    accountPermissionGroups?: Schema$AccountPermissionGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountPermissionGroupsListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Account Permission List Response
   */
  export interface Schema$AccountPermissionsListResponse {
    /**
     * Account permission collection.
     */
    accountPermissions?: Schema$AccountPermission[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountPermissionsListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Account List Response
   */
  export interface Schema$AccountsListResponse {
    /**
     * Account collection.
     */
    accounts?: Schema$Account[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
   */
  export interface Schema$AccountUserProfile {
    /**
     * Account ID of the user profile. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
     */
    active?: boolean;
    /**
     * Filter that describes which advertisers are visible to the user profile.
     */
    advertiserFilter?: Schema$ObjectFilter;
    /**
     * Filter that describes which campaigns are visible to the user profile.
     */
    campaignFilter?: Schema$ObjectFilter;
    /**
     * Comments for this user profile.
     */
    comments?: string;
    /**
     * Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
     */
    email?: string;
    /**
     * ID of the user profile. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountUserProfile&quot;.
     */
    kind?: string;
    /**
     * Locale of the user profile. This is a required field. Acceptable values are:   - &quot;cs&quot; (Czech)  - &quot;de&quot; (German)  - &quot;en&quot; (English)  - &quot;en-GB&quot; (English United Kingdom)  - &quot;es&quot; (Spanish)  - &quot;fr&quot; (French)  - &quot;it&quot; (Italian)  - &quot;ja&quot; (Japanese)  - &quot;ko&quot; (Korean)  - &quot;pl&quot; (Polish)  - &quot;pt-BR&quot; (Portuguese Brazil) - &quot;ru&quot; (Russian)  - &quot;sv&quot; (Swedish)  - &quot;tr&quot; (Turkish)  - &quot;zh-CN&quot; (Chinese Simplified)  - &quot;zh-TW&quot; (Chinese Traditional)
     */
    locale?: string;
    /**
     * Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: &quot;&amp;;&quot;#%,&quot;.
     */
    name?: string;
    /**
     * Filter that describes which sites are visible to the user profile.
     */
    siteFilter?: Schema$ObjectFilter;
    /**
     * Subaccount ID of the user profile. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Trafficker type of this user profile. This is a read-only field.
     */
    traffickerType?: string;
    /**
     * User type of the user profile. This is a read-only field that can be left blank.
     */
    userAccessType?: string;
    /**
     * Filter that describes which user roles are visible to the user profile.
     */
    userRoleFilter?: Schema$ObjectFilter;
    /**
     * User role ID of the user profile. This is a required field.
     */
    userRoleId?: string;
  }
  /**
   * Account User Profile List Response
   */
  export interface Schema$AccountUserProfilesListResponse {
    /**
     * Account user profile collection.
     */
    accountUserProfiles?: Schema$AccountUserProfile[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#accountUserProfilesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Represents an activity group.
   */
  export interface Schema$Activities {
    /**
     * List of activity filters. The dimension values need to be all either of type &quot;dfa:activity&quot; or &quot;dfa:activityGroup&quot;.
     */
    filters?: Schema$DimensionValue[];
    /**
     * The kind of resource this is, in this case dfareporting#activities.
     */
    kind?: string;
    /**
     * List of names of floodlight activity metrics.
     */
    metricNames?: string[];
  }
  /**
   * Contains properties of a Campaign Manager ad.
   */
  export interface Schema$Ad {
    /**
     * Account ID of this ad. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this ad is active. When true, archived must be false.
     */
    active?: boolean;
    /**
     * Advertiser ID of this ad. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this ad is archived. When true, active must be false.
     */
    archived?: boolean;
    /**
     * Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    audienceSegmentId?: string;
    /**
     * Campaign ID of this ad. This is a required field on insertion.
     */
    campaignId?: string;
    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: Schema$DimensionValue;
    /**
     * Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.
     */
    clickThroughUrl?: Schema$ClickThroughUrl;
    /**
     * Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative.
     */
    clickThroughUrlSuffixProperties?: Schema$ClickThroughUrlSuffixProperties;
    /**
     * Comments for this ad.
     */
    comments?: string;
    /**
     * Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
     */
    compatibility?: string;
    /**
     * Information about the creation of this ad. This is a read-only field.
     */
    createInfo?: Schema$LastModifiedInfo;
    /**
     * Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.
     */
    creativeGroupAssignments?: Schema$CreativeGroupAssignment[];
    /**
     * Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment.
     */
    creativeRotation?: Schema$CreativeRotation;
    /**
     * Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    dayPartTargeting?: Schema$DayPartTargeting;
    /**
     * Default click-through event tag properties for this ad.
     */
    defaultClickThroughEventTagProperties?: Schema$DefaultClickThroughEventTagProperties;
    /**
     * Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.
     */
    deliverySchedule?: Schema$DeliverySchedule;
    /**
     * Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.
     */
    dynamicClickTracker?: boolean;
    /**
     * Date and time that this ad should stop serving. Must be later than the start time. This is a required field on insertion.
     */
    endTime?: string;
    /**
     * Event tag overrides for this ad.
     */
    eventTagOverrides?: Schema$EventTagOverride[];
    /**
     * Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    geoTargeting?: Schema$GeoTargeting;
    /**
     * ID of this ad. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this ad. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    keyValueTargetingExpression?: Schema$KeyValueTargetingExpression;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#ad&quot;.
     */
    kind?: string;
    /**
     * Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    languageTargeting?: Schema$LanguageTargeting;
    /**
     * Information about the most recent modification of this ad. This is a read-only field.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Name of this ad. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Placement assignments for this ad.
     */
    placementAssignments?: Schema$PlacementAssignment[];
    /**
     * Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    remarketingListExpression?: Schema$ListTargetingExpression;
    /**
     * Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.
     */
    size?: Schema$Size;
    /**
     * Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;
    /**
     * Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;
    /**
     * Date and time that this ad should start serving. If creating an ad, this field must be a time in the future. This is a required field on insertion.
     */
    startTime?: string;
    /**
     * Subaccount ID of this ad. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    targetingTemplateId?: string;
    /**
     * Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.
     */
    technologyTargeting?: Schema$TechnologyTargeting;
    /**
     * Type of ad. This is a required field on insertion. Note that default ads (AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).
     */
    type?: string;
  }
  /**
   * Campaign ad blocking settings.
   */
  export interface Schema$AdBlockingConfiguration {
    /**
     * Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.
     */
    clickThroughUrl?: string;
    /**
     * ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used.
     */
    creativeBundleId?: string;
    /**
     * Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
     */
    enabled?: boolean;
    /**
     * Whether the brand-neutral ad&#39;s click-through URL comes from the campaign&#39;s creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured.
     */
    overrideClickThroughUrl?: boolean;
  }
  /**
   * Ad List Response
   */
  export interface Schema$AdsListResponse {
    /**
     * Ad collection.
     */
    ads?: Schema$Ad[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#adsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Ad Slot
   */
  export interface Schema$AdSlot {
    /**
     * Comment for this ad slot.
     */
    comment?: string;
    /**
     * Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     */
    compatibility?: string;
    /**
     * Height of this ad slot.
     */
    height?: string;
    /**
     * ID of the placement from an external platform that is linked to this ad slot.
     */
    linkedPlacementId?: string;
    /**
     * Name of this ad slot.
     */
    name?: string;
    /**
     * Payment source type of this ad slot.
     */
    paymentSourceType?: string;
    /**
     * Primary ad slot of a roadblock inventory item.
     */
    primary?: boolean;
    /**
     * Width of this ad slot.
     */
    width?: string;
  }
  /**
   * Contains properties of a Campaign Manager advertiser.
   */
  export interface Schema$Advertiser {
    /**
     * Account ID of this advertiser.This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.
     */
    advertiserGroupId?: string;
    /**
     * Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
     */
    clickThroughUrlSuffix?: string;
    /**
     * ID of the click-through event tag to apply by default to the landing pages of this advertiser&#39;s campaigns.
     */
    defaultClickThroughEventTagId?: string;
    /**
     * Default email address used in sender field for tag emails.
     */
    defaultEmail?: string;
    /**
     * Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser&#39;s floodlight configuration ID in order to share that advertiser&#39;s floodlight configuration with this advertiser, so long as:  - This advertiser&#39;s original floodlight configuration is not already associated with floodlight activities or floodlight activity groups.  - This advertiser&#39;s original floodlight configuration is not already shared with another advertiser.
     */
    floodlightConfigurationId?: string;
    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
    /**
     * ID of this advertiser. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#advertiser&quot;.
     */
    kind?: string;
    /**
     * Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
     */
    name?: string;
    /**
     * Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser&#39;s current floodlight configuration. You cannot unshare an advertiser&#39;s floodlight configuration if the shared configuration has activities associated with any campaign or placement.
     */
    originalFloodlightConfigurationId?: string;
    /**
     * Status of this advertiser.
     */
    status?: string;
    /**
     * Subaccount ID of this advertiser.This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Suspension status of this advertiser.
     */
    suspended?: boolean;
  }
  /**
   * Groups advertisers together so that reports can be generated for the entire group at once.
   */
  export interface Schema$AdvertiserGroup {
    /**
     * Account ID of this advertiser group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this advertiser group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#advertiserGroup&quot;.
     */
    kind?: string;
    /**
     * Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.
     */
    name?: string;
  }
  /**
   * Advertiser Group List Response
   */
  export interface Schema$AdvertiserGroupsListResponse {
    /**
     * Advertiser group collection.
     */
    advertiserGroups?: Schema$AdvertiserGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#advertiserGroupsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Landing Page List Response
   */
  export interface Schema$AdvertiserLandingPagesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#advertiserLandingPagesListResponse&quot;.
     */
    kind?: string;
    /**
     * Landing page collection
     */
    landingPages?: Schema$LandingPage[];
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Advertiser List Response
   */
  export interface Schema$AdvertisersListResponse {
    /**
     * Advertiser collection.
     */
    advertisers?: Schema$Advertiser[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#advertisersListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Audience Segment.
   */
  export interface Schema$AudienceSegment {
    /**
     * Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
     */
    allocation?: number;
    /**
     * ID of this audience segment. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Name of this audience segment. This is a required field and must be less than 65 characters long.
     */
    name?: string;
  }
  /**
   * Audience Segment Group.
   */
  export interface Schema$AudienceSegmentGroup {
    /**
     * Audience segments assigned to this group. The number of segments must be between 2 and 100.
     */
    audienceSegments?: Schema$AudienceSegment[];
    /**
     * ID of this audience segment group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Name of this audience segment group. This is a required field and must be less than 65 characters long.
     */
    name?: string;
  }
  /**
   * Contains information about a browser that can be targeted by ads.
   */
  export interface Schema$Browser {
    /**
     * ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
     */
    browserVersionId?: string;
    /**
     * DART ID of this browser. This is the ID used when generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#browser&quot;.
     */
    kind?: string;
    /**
     * Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can&#39;t tell which version it is.
     */
    majorVersion?: string;
    /**
     * Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can&#39;t tell which version it is.
     */
    minorVersion?: string;
    /**
     * Name of this browser.
     */
    name?: string;
  }
  /**
   * Browser List Response
   */
  export interface Schema$BrowsersListResponse {
    /**
     * Browser collection.
     */
    browsers?: Schema$Browser[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#browsersListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Contains properties of a Campaign Manager campaign.
   */
  export interface Schema$Campaign {
    /**
     * Account ID of this campaign. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Ad blocking settings for this campaign.
     */
    adBlockingConfiguration?: Schema$AdBlockingConfiguration;
    /**
     * Additional creative optimization configurations for the campaign.
     */
    additionalCreativeOptimizationConfigurations?: Schema$CreativeOptimizationConfiguration[];
    /**
     * Advertiser group ID of the associated advertiser.
     */
    advertiserGroupId?: string;
    /**
     * Advertiser ID of this campaign. This is a required field.
     */
    advertiserId?: string;
    /**
     * Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this campaign has been archived.
     */
    archived?: boolean;
    /**
     * Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
     */
    audienceSegmentGroups?: Schema$AudienceSegmentGroup[];
    /**
     * Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.
     */
    billingInvoiceCode?: string;
    /**
     * Click-through URL suffix override properties for this campaign.
     */
    clickThroughUrlSuffixProperties?: Schema$ClickThroughUrlSuffixProperties;
    /**
     * Arbitrary comments about this campaign. Must be less than 256 characters long.
     */
    comment?: string;
    /**
     * Information about the creation of this campaign. This is a read-only field.
     */
    createInfo?: Schema$LastModifiedInfo;
    /**
     * List of creative group IDs that are assigned to the campaign.
     */
    creativeGroupIds?: string[];
    /**
     * Creative optimization configuration for the campaign.
     */
    creativeOptimizationConfiguration?: Schema$CreativeOptimizationConfiguration;
    /**
     * Click-through event tag ID override properties for this campaign.
     */
    defaultClickThroughEventTagProperties?: Schema$DefaultClickThroughEventTagProperties;
    /**
     * The default landing page ID for this campaign.
     */
    defaultLandingPageId?: string;
    /**
     * Date on which the campaign will stop running. On insert, the end date must be today or a future date. The end date must be later than or be the same as the start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective campaign run date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This is a required field.
     */
    endDate?: string;
    /**
     * Overrides that can be used to activate or deactivate advertiser event tags.
     */
    eventTagOverrides?: Schema$EventTagOverride[];
    /**
     * External ID for this campaign.
     */
    externalId?: string;
    /**
     * ID of this campaign. This is a read-only auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this campaign. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#campaign&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this campaign. This is a read-only field.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Lookback window settings for the campaign.
     */
    lookbackConfiguration?: Schema$LookbackConfiguration;
    /**
     * Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser.
     */
    name?: string;
    /**
     * Whether Nielsen reports are enabled for this campaign.
     */
    nielsenOcrEnabled?: boolean;
    /**
     * Date on which the campaign starts running. The start date can be any date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This is a required field.
     */
    startDate?: string;
    /**
     * Subaccount ID of this campaign. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Campaign trafficker contact emails.
     */
    traffickerEmails?: string[];
  }
  /**
   * Identifies a creative which has been associated with a given campaign.
   */
  export interface Schema$CampaignCreativeAssociation {
    /**
     * ID of the creative associated with the campaign. This is a required field.
     */
    creativeId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#campaignCreativeAssociation&quot;.
     */
    kind?: string;
  }
  /**
   * Campaign Creative Association List Response
   */
  export interface Schema$CampaignCreativeAssociationsListResponse {
    /**
     * Campaign creative association collection
     */
    campaignCreativeAssociations?: Schema$CampaignCreativeAssociation[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#campaignCreativeAssociationsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Campaign List Response
   */
  export interface Schema$CampaignsListResponse {
    /**
     * Campaign collection.
     */
    campaigns?: Schema$Campaign[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#campaignsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Describes a change that a user has made to a resource.
   */
  export interface Schema$ChangeLog {
    /**
     * Account ID of the modified object.
     */
    accountId?: string;
    /**
     * Action which caused the change.
     */
    action?: string;
    /**
     * Time when the object was modified.
     */
    changeTime?: string;
    /**
     * Field name of the object which changed.
     */
    fieldName?: string;
    /**
     * ID of this change log.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#changeLog&quot;.
     */
    kind?: string;
    /**
     * New value of the object field.
     */
    newValue?: string;
    /**
     * ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
     */
    objectId?: string;
    /**
     * Object type of the change log.
     */
    objectType?: string;
    /**
     * Old value of the object field.
     */
    oldValue?: string;
    /**
     * Subaccount ID of the modified object.
     */
    subaccountId?: string;
    /**
     * Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.
     */
    transactionId?: string;
    /**
     * ID of the user who modified the object.
     */
    userProfileId?: string;
    /**
     * User profile name of the user who modified the object.
     */
    userProfileName?: string;
  }
  /**
   * Change Log List Response
   */
  export interface Schema$ChangeLogsListResponse {
    /**
     * Change log collection.
     */
    changeLogs?: Schema$ChangeLog[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#changeLogsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * City List Response
   */
  export interface Schema$CitiesListResponse {
    /**
     * City collection.
     */
    cities?: Schema$City[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#citiesListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Contains information about a city that can be targeted by ads.
   */
  export interface Schema$City {
    /**
     * Country code of the country to which this city belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this city belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this city. This is the ID used for targeting and generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#city&quot;.
     */
    kind?: string;
    /**
     * Metro region code of the metro region (DMA) to which this city belongs.
     */
    metroCode?: string;
    /**
     * ID of the metro region (DMA) to which this city belongs.
     */
    metroDmaId?: string;
    /**
     * Name of this city.
     */
    name?: string;
    /**
     * Region code of the region to which this city belongs.
     */
    regionCode?: string;
    /**
     * DART ID of the region to which this city belongs.
     */
    regionDartId?: string;
  }
  /**
   * Creative Click Tag.
   */
  export interface Schema$ClickTag {
    /**
     * Parameter value for the specified click tag. This field contains a click-through url.
     */
    clickThroughUrl?: Schema$CreativeClickThroughUrl;
    /**
     * Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    eventName?: string;
    /**
     * Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset&#39;s creativeAssetId.name field.
     */
    name?: string;
  }
  /**
   * Click-through URL
   */
  export interface Schema$ClickThroughUrl {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows:  - If defaultLandingPage is enabled then the campaign&#39;s default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page&#39;s URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
     */
    computedClickThroughUrl?: string;
    /**
     * Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.
     */
    customClickThroughUrl?: string;
    /**
     * Whether the campaign default landing page is used.
     */
    defaultLandingPage?: boolean;
    /**
     * ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.
     */
    landingPageId?: string;
  }
  /**
   * Click Through URL Suffix settings.
   */
  export interface Schema$ClickThroughUrlSuffixProperties {
    /**
     * Click-through URL suffix to apply to all ads in this entity&#39;s scope. Must be less than 128 characters long.
     */
    clickThroughUrlSuffix?: string;
    /**
     * Whether this entity should override the inherited click-through URL suffix with its own defined value.
     */
    overrideInheritedSuffix?: boolean;
  }
  /**
   * Companion Click-through override.
   */
  export interface Schema$CompanionClickThroughOverride {
    /**
     * Click-through URL of this companion click-through override.
     */
    clickThroughUrl?: Schema$ClickThroughUrl;
    /**
     * ID of the creative for this companion click-through override.
     */
    creativeId?: string;
  }
  /**
   * Companion Settings
   */
  export interface Schema$CompanionSetting {
    /**
     * Whether companions are disabled for this placement.
     */
    companionsDisabled?: boolean;
    /**
     * Whitelist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes.
     */
    enabledSizes?: Schema$Size[];
    /**
     * Whether to serve only static images as companions.
     */
    imageOnly?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#companionSetting&quot;.
     */
    kind?: string;
  }
  /**
   * Represents a response to the queryCompatibleFields method.
   */
  export interface Schema$CompatibleFields {
    /**
     * Contains items that are compatible to be selected for a report of type &quot;CROSS_DIMENSION_REACH&quot;.
     */
    crossDimensionReachReportCompatibleFields?: Schema$CrossDimensionReachReportCompatibleFields;
    /**
     * Contains items that are compatible to be selected for a report of type &quot;FLOODLIGHT&quot;.
     */
    floodlightReportCompatibleFields?: Schema$FloodlightReportCompatibleFields;
    /**
     * The kind of resource this is, in this case dfareporting#compatibleFields.
     */
    kind?: string;
    /**
     * Contains items that are compatible to be selected for a report of type &quot;PATH_TO_CONVERSION&quot;.
     */
    pathToConversionReportCompatibleFields?: Schema$PathToConversionReportCompatibleFields;
    /**
     * Contains items that are compatible to be selected for a report of type &quot;REACH&quot;.
     */
    reachReportCompatibleFields?: Schema$ReachReportCompatibleFields;
    /**
     * Contains items that are compatible to be selected for a report of type &quot;STANDARD&quot;.
     */
    reportCompatibleFields?: Schema$ReportCompatibleFields;
  }
  /**
   * Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
   */
  export interface Schema$ConnectionType {
    /**
     * ID of this connection type.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#connectionType&quot;.
     */
    kind?: string;
    /**
     * Name of this connection type.
     */
    name?: string;
  }
  /**
   * Connection Type List Response
   */
  export interface Schema$ConnectionTypesListResponse {
    /**
     * Collection of connection types such as broadband and mobile.
     */
    connectionTypes?: Schema$ConnectionType[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#connectionTypesListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Content Category List Response
   */
  export interface Schema$ContentCategoriesListResponse {
    /**
     * Content category collection.
     */
    contentCategories?: Schema$ContentCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#contentCategoriesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Organizes placements according to the contents of their associated webpages.
   */
  export interface Schema$ContentCategory {
    /**
     * Account ID of this content category. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this content category. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#contentCategory&quot;.
     */
    kind?: string;
    /**
     * Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.
     */
    name?: string;
  }
  /**
   * A Conversion represents when a user successfully performs a desired action after seeing an ad.
   */
  export interface Schema$Conversion {
    /**
     * Whether this particular request may come from a user under the age of 13, under COPPA compliance.
     */
    childDirectedTreatment?: boolean;
    /**
     * Custom floodlight variables.
     */
    customVariables?: Schema$CustomFloodlightVariable[];
    /**
     * The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], mobileDeviceId and gclid. This or encryptedUserIdCandidates[] or mobileDeviceId or gclid is a required field.
     */
    encryptedUserId?: string;
    /**
     * A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with NO_COOKIE_MATCH_FOUND error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, mobileDeviceId and gclid. This or encryptedUserId or mobileDeviceId or gclid is a required field.
     */
    encryptedUserIdCandidates?: string[];
    /**
     * Floodlight Activity ID of this conversion. This is a required field.
     */
    floodlightActivityId?: string;
    /**
     * Floodlight Configuration ID of this conversion. This is a required field.
     */
    floodlightConfigurationId?: string;
    /**
     * The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[] and mobileDeviceId. This or encryptedUserId or encryptedUserIdCandidates[] or mobileDeviceId is a required field.
     */
    gclid?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversion&quot;.
     */
    kind?: string;
    /**
     * Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing.
     */
    limitAdTracking?: boolean;
    /**
     * The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[] and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or gclid is a required field.
     */
    mobileDeviceId?: string;
    /**
     * Whether the conversion was for a non personalized ad.
     */
    nonPersonalizedAd?: boolean;
    /**
     * The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field.
     */
    ordinal?: string;
    /**
     * The quantity of the conversion.
     */
    quantity?: string;
    /**
     * The timestamp of conversion, in Unix epoch micros. This is a required field.
     */
    timestampMicros?: string;
    /**
     * Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union&#39;s General Data Protection Regulation (GDPR).
     */
    treatmentForUnderage?: boolean;
    /**
     * The value of the conversion.
     */
    value?: number;
  }
  /**
   * The error code and description for a conversion that failed to insert or update.
   */
  export interface Schema$ConversionError {
    /**
     * The error code.
     */
    code?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionError&quot;.
     */
    kind?: string;
    /**
     * A description of the error.
     */
    message?: string;
  }
  /**
   * Insert Conversions Request.
   */
  export interface Schema$ConversionsBatchInsertRequest {
    /**
     * The set of conversions to insert.
     */
    conversions?: Schema$Conversion[];
    /**
     * Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[] is used.
     */
    encryptionInfo?: Schema$EncryptionInfo;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionsBatchInsertRequest&quot;.
     */
    kind?: string;
  }
  /**
   * Insert Conversions Response.
   */
  export interface Schema$ConversionsBatchInsertResponse {
    /**
     * Indicates that some or all conversions failed to insert.
     */
    hasFailures?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionsBatchInsertResponse&quot;.
     */
    kind?: string;
    /**
     * The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
     */
    status?: Schema$ConversionStatus[];
  }
  /**
   * Update Conversions Request.
   */
  export interface Schema$ConversionsBatchUpdateRequest {
    /**
     * The set of conversions to update.
     */
    conversions?: Schema$Conversion[];
    /**
     * Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used.
     */
    encryptionInfo?: Schema$EncryptionInfo;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionsBatchUpdateRequest&quot;.
     */
    kind?: string;
  }
  /**
   * Update Conversions Response.
   */
  export interface Schema$ConversionsBatchUpdateResponse {
    /**
     * Indicates that some or all conversions failed to update.
     */
    hasFailures?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionsBatchUpdateResponse&quot;.
     */
    kind?: string;
    /**
     * The update status of each conversion. Statuses are returned in the same order that conversions are updated.
     */
    status?: Schema$ConversionStatus[];
  }
  /**
   * The original conversion that was inserted or updated and whether there were any errors.
   */
  export interface Schema$ConversionStatus {
    /**
     * The original conversion that was inserted or updated.
     */
    conversion?: Schema$Conversion;
    /**
     * A list of errors related to this conversion.
     */
    errors?: Schema$ConversionError[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#conversionStatus&quot;.
     */
    kind?: string;
  }
  /**
   * Country List Response
   */
  export interface Schema$CountriesListResponse {
    /**
     * Country collection.
     */
    countries?: Schema$Country[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#countriesListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Contains information about a country that can be targeted by ads.
   */
  export interface Schema$Country {
    /**
     * Country code.
     */
    countryCode?: string;
    /**
     * DART ID of this country. This is the ID used for targeting and generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#country&quot;.
     */
    kind?: string;
    /**
     * Name of this country.
     */
    name?: string;
    /**
     * Whether ad serving supports secure servers in this country.
     */
    sslEnabled?: boolean;
  }
  /**
   * Contains properties of a Creative.
   */
  export interface Schema$Creative {
    /**
     * Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
     */
    accountId?: string;
    /**
     * Whether the creative is active. Applicable to all creative types.
     */
    active?: boolean;
    /**
     * Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE.
     */
    additionalSizes?: Schema$Size[];
    /**
     * Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
     */
    adParameters?: string;
    /**
     * Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    adTagKeys?: string[];
    /**
     * Advertiser ID of this creative. This is a required field. Applicable to all creative types.
     */
    advertiserId?: string;
    /**
     * Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE.
     */
    allowScriptAccess?: boolean;
    /**
     * Whether the creative is archived. Applicable to all creative types.
     */
    archived?: boolean;
    /**
     * Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    artworkType?: string;
    /**
     * Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types.
     */
    authoringSource?: string;
    /**
     * Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    authoringTool?: string;
    /**
     * Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY.
     */
    autoAdvanceImages?: boolean;
    /**
     * The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.
     */
    backgroundColor?: string;
    /**
     * Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE.
     */
    backupImageClickThroughUrl?: Schema$CreativeClickThroughUrl;
    /**
     * List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets&#39; detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    backupImageFeatures?: string[];
    /**
     * Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    backupImageReportingLabel?: string;
    /**
     * Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    backupImageTargetWindow?: Schema$TargetWindow;
    /**
     * Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    clickTags?: Schema$ClickTag[];
    /**
     * Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.
     */
    commercialId?: string;
    /**
     * List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false.
     */
    companionCreatives?: string[];
    /**
     * Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types.  Acceptable values are: - &quot;APP&quot; - &quot;APP_INTERSTITIAL&quot; - &quot;IN_STREAM_VIDEO&quot; - &quot;IN_STREAM_AUDIO&quot; - &quot;DISPLAY&quot; - &quot;DISPLAY_INTERSTITIAL&quot;
     */
    compatibility?: string[];
    /**
     * Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don&#39;t want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    convertFlashToHtml5?: boolean;
    /**
     * List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID.
     */
    counterCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
     */
    creativeAssets?: Schema$CreativeAsset[];
    /**
     * Required if dynamicAssetSelection is true.
     */
    creativeAssetSelection?: Schema$CreativeAssetSelection;
    /**
     * Creative field assignments for this creative. Applicable to all creative types.
     */
    creativeFieldAssignments?: Schema$CreativeFieldAssignment[];
    /**
     * Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    customKeyValues?: string[];
    /**
     * Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives.
     */
    dynamicAssetSelection?: boolean;
    /**
     * List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    exitCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE.
     */
    fsCommand?: Schema$FsCommand;
    /**
     * HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
     */
    htmlCode?: string;
    /**
     * Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.
     */
    htmlCodeLocked?: boolean;
    /**
     * ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
     */
    id?: string;
    /**
     * Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creative&quot;.
     */
    kind?: string;
    /**
     * Creative last modification information. This is a read-only field. Applicable to all creative types.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    latestTraffickedCreativeId?: string;
    /**
     * Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID.
     */
    mediaDescription?: string;
    /**
     * Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID.
     */
    mediaDuration?: number;
    /**
     * Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types.
     */
    name?: string;
    /**
     * Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
     */
    overrideCss?: string;
    /**
     * The asset ID of the polite load image asset. Applicable to the creative type: DISPLAY.
     */
    politeLoadAssetId?: string;
    /**
     * Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO.
     */
    progressOffset?: Schema$VideoOffset;
    /**
     * URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT
     */
    redirectUrl?: string;
    /**
     * ID of current rendering version. This is a read-only field. Applicable to all creative types.
     */
    renderingId?: string;
    /**
     * Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.
     */
    renderingIdDimensionValue?: Schema$DimensionValue;
    /**
     * The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    requiredFlashPluginVersion?: string;
    /**
     * The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    requiredFlashVersion?: number;
    /**
     * Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.
     */
    size?: Schema$Size;
    /**
     * Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO.
     */
    skipOffset?: Schema$VideoOffset;
    /**
     * Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
     */
    skippable?: boolean;
    /**
     * Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
     */
    sslCompliant?: boolean;
    /**
     * Whether creative should be treated as SSL compliant even if the system scan shows it&#39;s not. Applicable to all creative types.
     */
    sslOverride?: boolean;
    /**
     * Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    studioAdvertiserId?: string;
    /**
     * Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    studioCreativeId?: string;
    /**
     * Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    studioTraffickedCreativeId?: string;
    /**
     * Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
     */
    subaccountId?: string;
    /**
     * Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.
     */
    thirdPartyBackupImageImpressionsUrl?: string;
    /**
     * Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.
     */
    thirdPartyRichMediaImpressionsUrl?: string;
    /**
     * Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID.
     */
    thirdPartyUrls?: Schema$ThirdPartyTrackingUrl[];
    /**
     * List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE.
     */
    timerCustomEvents?: Schema$CreativeCustomEvent[];
    /**
     * Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
     */
    totalFileSize?: string;
    /**
     * Type of this creative. This is a required field. Applicable to all creative types.  Note: FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
     */
    type?: string;
    /**
     * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and INSTREAM_VIDEO and VPAID.
     */
    universalAdId?: Schema$UniversalAdId;
    /**
     * The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types.
     */
    version?: number;
  }
  /**
   * Creative Asset.
   */
  export interface Schema$CreativeAsset {
    /**
     * Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    actionScript3?: boolean;
    /**
     * Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    active?: boolean;
    /**
     * Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render.
     */
    additionalSizes?: Schema$Size[];
    /**
     * Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL.
     */
    alignment?: string;
    /**
     * Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    artworkType?: string;
    /**
     * Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    assetIdentifier?: Schema$CreativeAssetId;
    /**
     * Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.
     */
    backupImageExit?: Schema$CreativeCustomEvent;
    /**
     * Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    bitRate?: number;
    /**
     * Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
     */
    childAssetType?: string;
    /**
     * Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
     */
    collapsedSize?: Schema$Size;
    /**
     * List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
     */
    companionCreativeIds?: string[];
    /**
     * Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0.
     */
    customStartTimeValue?: number;
    /**
     * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    detectedFeatures?: string[];
    /**
     * Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    displayType?: string;
    /**
     * Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.
     */
    duration?: number;
    /**
     * Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
     */
    durationType?: string;
    /**
     * Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    expandedDimension?: Schema$Size;
    /**
     * File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    fileSize?: string;
    /**
     * Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    flashVersion?: number;
    /**
     * Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideFlashObjects?: boolean;
    /**
     * Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    hideSelectionBoxes?: boolean;
    /**
     * Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    horizontallyLocked?: boolean;
    /**
     * Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    id?: string;
    /**
     * Dimension value for the ID of the asset. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    mediaDuration?: number;
    /**
     * Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
     */
    mimeType?: string;
    /**
     * Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.
     */
    offset?: Schema$OffsetPosition;
    /**
     * Orientation of video asset. This is a read-only, auto-generated field.
     */
    orientation?: string;
    /**
     * Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA.
     */
    originalBackup?: boolean;
    /**
     * Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.
     */
    position?: Schema$OffsetPosition;
    /**
     * Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    positionLeftUnit?: string;
    /**
     * Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
     */
    positionTopUnit?: string;
    /**
     * Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    progressiveServingUrl?: string;
    /**
     * Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
     */
    pushdown?: boolean;
    /**
     * Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.
     */
    pushdownDuration?: number;
    /**
     * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives.
     */
    role?: string;
    /**
     * Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
     */
    size?: Schema$Size;
    /**
     * Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
     */
    sslCompliant?: boolean;
    /**
     * Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
     */
    startTimeType?: string;
    /**
     * Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
     */
    streamingServingUrl?: string;
    /**
     * Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
     */
    transparency?: boolean;
    /**
     * Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
     */
    verticallyLocked?: boolean;
    /**
     * Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
     */
    windowMode?: string;
    /**
     * zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.
     */
    zIndex?: number;
    /**
     * File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilename?: string;
    /**
     * Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
     */
    zipFilesize?: string;
  }
  /**
   * Creative Asset ID.
   */
  export interface Schema$CreativeAssetId {
    /**
     * Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: &quot;.-_ &quot;. Spaces are allowed.
     */
    name?: string;
    /**
     * Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.
     */
    type?: string;
  }
  /**
   * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
   */
  export interface Schema$CreativeAssetMetadata {
    /**
     * ID of the creative asset. This is a required field.
     */
    assetIdentifier?: Schema$CreativeAssetId;
    /**
     * List of detected click tags for assets. This is a read-only auto-generated field.
     */
    clickTags?: Schema$ClickTag[];
    /**
     * List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
     */
    detectedFeatures?: string[];
    /**
     * Numeric ID of the asset. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeAssetMetadata&quot;.
     */
    kind?: string;
    /**
     * Rules validated during code generation that generated a warning. This is a read-only, auto-generated field.  Possible values are: - &quot;ADMOB_REFERENCED&quot; - &quot;ASSET_FORMAT_UNSUPPORTED_DCM&quot; - &quot;ASSET_INVALID&quot; - &quot;CLICK_TAG_HARD_CODED&quot; - &quot;CLICK_TAG_INVALID&quot; - &quot;CLICK_TAG_IN_GWD&quot; - &quot;CLICK_TAG_MISSING&quot; - &quot;CLICK_TAG_MORE_THAN_ONE&quot; - &quot;CLICK_TAG_NON_TOP_LEVEL&quot; - &quot;COMPONENT_UNSUPPORTED_DCM&quot; - &quot;ENABLER_UNSUPPORTED_METHOD_DCM&quot; - &quot;EXTERNAL_FILE_REFERENCED&quot; - &quot;FILE_DETAIL_EMPTY&quot; - &quot;FILE_TYPE_INVALID&quot; - &quot;GWD_PROPERTIES_INVALID&quot; - &quot;HTML5_FEATURE_UNSUPPORTED&quot; - &quot;LINKED_FILE_NOT_FOUND&quot; - &quot;MAX_FLASH_VERSION_11&quot; - &quot;MRAID_REFERENCED&quot; - &quot;NOT_SSL_COMPLIANT&quot; - &quot;ORPHANED_ASSET&quot; - &quot;PRIMARY_HTML_MISSING&quot; - &quot;SVG_INVALID&quot; - &quot;ZIP_INVALID&quot;
     */
    warnedValidationRules?: string[];
  }
  /**
   * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
   */
  export interface Schema$CreativeAssetSelection {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field.
     */
    defaultAssetId?: string;
    /**
     * Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
     */
    rules?: Schema$Rule[];
  }
  /**
   * Creative Assignment.
   */
  export interface Schema$CreativeAssignment {
    /**
     * Whether this creative assignment is active. When true, the creative will be included in the ad&#39;s rotation.
     */
    active?: boolean;
    /**
     * Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
     */
    applyEventTags?: boolean;
    /**
     * Click-through URL of the creative assignment.
     */
    clickThroughUrl?: Schema$ClickThroughUrl;
    /**
     * Companion creative overrides for this creative assignment. Applicable to video ads.
     */
    companionCreativeOverrides?: Schema$CompanionClickThroughOverride[];
    /**
     * Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
     */
    creativeGroupAssignments?: Schema$CreativeGroupAssignment[];
    /**
     * ID of the creative to be assigned. This is a required field.
     */
    creativeId?: string;
    /**
     * Dimension value for the ID of the creative. This is a read-only, auto-generated field.
     */
    creativeIdDimensionValue?: Schema$DimensionValue;
    /**
     * Date and time that the assigned creative should stop serving. Must be later than the start time.
     */
    endTime?: string;
    /**
     * Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following:  - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR
     */
    richMediaExitOverrides?: Schema$RichMediaExitOverride[];
    /**
     * Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive.
     */
    sequence?: number;
    /**
     * Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslCompliant?: boolean;
    /**
     * Date and time that the assigned creative should start serving.
     */
    startTime?: string;
    /**
     * Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.
     */
    weight?: number;
  }
  /**
   * Click-through URL
   */
  export interface Schema$CreativeClickThroughUrl {
    /**
     * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows:  - If landingPageId is specified then that landing page&#39;s URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field.
     */
    computedClickThroughUrl?: string;
    /**
     * Custom click-through URL. Applicable if the landingPageId field is left unset.
     */
    customClickThroughUrl?: string;
    /**
     * ID of the landing page for the click-through URL.
     */
    landingPageId?: string;
  }
  /**
   * Creative Custom Event.
   */
  export interface Schema$CreativeCustomEvent {
    /**
     * Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
     */
    advertiserCustomEventId?: string;
    /**
     * User-entered name for the event.
     */
    advertiserCustomEventName?: string;
    /**
     * Type of the event. This is a read-only field.
     */
    advertiserCustomEventType?: string;
    /**
     * Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.
     */
    artworkLabel?: string;
    /**
     * Artwork type used by the creative.This is a read-only field.
     */
    artworkType?: string;
    /**
     * Exit click-through URL for the event. This field is used only for exit events.
     */
    exitClickThroughUrl?: Schema$CreativeClickThroughUrl;
    /**
     * ID of this event. This is a required field and should not be modified after insertion.
     */
    id?: string;
    /**
     * Properties for rich media popup windows. This field is used only for exit events.
     */
    popupWindowProperties?: Schema$PopupWindowProperties;
    /**
     * Target type used by the event.
     */
    targetType?: string;
    /**
     * Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.
     */
    videoReportingId?: string;
  }
  /**
   * Contains properties of a creative field.
   */
  export interface Schema$CreativeField {
    /**
     * Account ID of this creative field. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this creative field. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * ID of this creative field. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeField&quot;.
     */
    kind?: string;
    /**
     * Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this creative field. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }
  /**
   * Creative Field Assignment.
   */
  export interface Schema$CreativeFieldAssignment {
    /**
     * ID of the creative field.
     */
    creativeFieldId?: string;
    /**
     * ID of the creative field value.
     */
    creativeFieldValueId?: string;
  }
  /**
   * Creative Field List Response
   */
  export interface Schema$CreativeFieldsListResponse {
    /**
     * Creative field collection.
     */
    creativeFields?: Schema$CreativeField[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeFieldsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Contains properties of a creative field value.
   */
  export interface Schema$CreativeFieldValue {
    /**
     * ID of this creative field value. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeFieldValue&quot;.
     */
    kind?: string;
    /**
     * Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.
     */
    value?: string;
  }
  /**
   * Creative Field Value List Response
   */
  export interface Schema$CreativeFieldValuesListResponse {
    /**
     * Creative field value collection.
     */
    creativeFieldValues?: Schema$CreativeFieldValue[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeFieldValuesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Contains properties of a creative group.
   */
  export interface Schema$CreativeGroup {
    /**
     * Account ID of this creative group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this creative group. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
     */
    groupNumber?: number;
    /**
     * ID of this creative group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeGroup&quot;.
     */
    kind?: string;
    /**
     * Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this creative group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }
  /**
   * Creative Group Assignment.
   */
  export interface Schema$CreativeGroupAssignment {
    /**
     * ID of the creative group to be assigned.
     */
    creativeGroupId?: string;
    /**
     * Creative group number of the creative group assignment.
     */
    creativeGroupNumber?: string;
  }
  /**
   * Creative Group List Response
   */
  export interface Schema$CreativeGroupsListResponse {
    /**
     * Creative group collection.
     */
    creativeGroups?: Schema$CreativeGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativeGroupsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Creative optimization settings.
   */
  export interface Schema$CreativeOptimizationConfiguration {
    /**
     * ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
     */
    id?: string;
    /**
     * Name of this creative optimization config. This is a required field and must be less than 129 characters long.
     */
    name?: string;
    /**
     * List of optimization activities associated with this configuration.
     */
    optimizationActivitys?: Schema$OptimizationActivity[];
    /**
     * Optimization model for this configuration.
     */
    optimizationModel?: string;
  }
  /**
   * Creative Rotation.
   */
  export interface Schema$CreativeRotation {
    /**
     * Creative assignments in this creative rotation.
     */
    creativeAssignments?: Schema$CreativeAssignment[];
    /**
     * Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad&#39;s campaign. If it is unset or set to 0, then the campaign&#39;s default optimization configuration will be used for this ad.
     */
    creativeOptimizationConfigurationId?: string;
    /**
     * Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
     */
    type?: string;
    /**
     * Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.
     */
    weightCalculationStrategy?: string;
  }
  /**
   * Creative Settings
   */
  export interface Schema$CreativeSettings {
    /**
     * Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
     */
    iFrameFooter?: string;
    /**
     * Header text for iFrames for this site. Must be less than or equal to 2000 characters long.
     */
    iFrameHeader?: string;
  }
  /**
   * Creative List Response
   */
  export interface Schema$CreativesListResponse {
    /**
     * Creative collection.
     */
    creatives?: Schema$Creative[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#creativesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Represents fields that are compatible to be selected for a report of type &quot;CROSS_DIMENSION_REACH&quot;.
   */
  export interface Schema$CrossDimensionReachReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the &quot;breakdown&quot; section of the report.
     */
    breakdown?: Schema$Dimension[];
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensionFilters&quot; section of the report.
     */
    dimensionFilters?: Schema$Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the &quot;metricNames&quot; section of the report.
     */
    metrics?: Schema$Metric[];
    /**
     * Metrics which are compatible to be selected in the &quot;overlapMetricNames&quot; section of the report.
     */
    overlapMetrics?: Schema$Metric[];
  }
  /**
   * A custom floodlight variable.
   */
  export interface Schema$CustomFloodlightVariable {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#customFloodlightVariable&quot;.
     */
    kind?: string;
    /**
     * The type of custom floodlight variable to supply a value for. These map to the &quot;u[1-20]=&quot; in the tags.
     */
    type?: string;
    /**
     * The value of the custom floodlight variable. The length of string must not exceed 50 characters.
     */
    value?: string;
  }
  /**
   * Represents a Custom Rich Media Events group.
   */
  export interface Schema$CustomRichMediaEvents {
    /**
     * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
     */
    filteredEventIds?: Schema$DimensionValue[];
    /**
     * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
     */
    kind?: string;
  }
  /**
   * Represents a date range.
   */
  export interface Schema$DateRange {
    /**
     * The end date of the date range, inclusive. A string of the format: &quot;yyyy-MM-dd&quot;.
     */
    endDate?: string;
    /**
     * The kind of resource this is, in this case dfareporting#dateRange.
     */
    kind?: string;
    /**
     * The date range relative to the date of when the report is run.
     */
    relativeDateRange?: string;
    /**
     * The start date of the date range, inclusive. A string of the format: &quot;yyyy-MM-dd&quot;.
     */
    startDate?: string;
  }
  /**
   * Day Part Targeting.
   */
  export interface Schema$DayPartTargeting {
    /**
     * Days of the week when the ad will serve.  Acceptable values are: - &quot;SUNDAY&quot; - &quot;MONDAY&quot; - &quot;TUESDAY&quot; - &quot;WEDNESDAY&quot; - &quot;THURSDAY&quot; - &quot;FRIDAY&quot; - &quot;SATURDAY&quot;
     */
    daysOfWeek?: string[];
    /**
     * Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
     */
    hoursOfDay?: number[];
    /**
     * Whether or not to use the user&#39;s local time. If false, the America/New York time zone applies.
     */
    userLocalTime?: boolean;
  }
  /**
   * Contains information about a landing page deep link.
   */
  export interface Schema$DeepLink {
    /**
     * The URL of the mobile app being linked to.
     */
    appUrl?: string;
    /**
     * The fallback URL. This URL will be served to users who do not have the mobile app installed.
     */
    fallbackUrl?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#deepLink&quot;.
     */
    kind?: string;
    /**
     * The mobile app targeted by this deep link.
     */
    mobileApp?: Schema$MobileApp;
    /**
     * Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE.
     */
    remarketingListIds?: string[];
  }
  /**
   * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign&#39;s setting further.
   */
  export interface Schema$DefaultClickThroughEventTagProperties {
    /**
     * ID of the click-through event tag to apply to all ads in this entity&#39;s scope.
     */
    defaultClickThroughEventTagId?: string;
    /**
     * Whether this entity should override the inherited default click-through event tag with its own defined value.
     */
    overrideInheritedEventTag?: boolean;
  }
  /**
   * Delivery Schedule.
   */
  export interface Schema$DeliverySchedule {
    /**
     * Limit on the number of times an individual user can be served the ad within a specified period of time.
     */
    frequencyCap?: Schema$FrequencyCap;
    /**
     * Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.
     */
    hardCutoff?: boolean;
    /**
     * Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.
     */
    impressionRatio?: string;
    /**
     * Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.
     */
    priority?: string;
  }
  /**
   * Google Ad Manager Settings
   */
  export interface Schema$DfpSettings {
    /**
     * Ad Manager network code for this directory site.
     */
    dfpNetworkCode?: string;
    /**
     * Ad Manager network name for this directory site.
     */
    dfpNetworkName?: string;
    /**
     * Whether this directory site accepts programmatic placements.
     */
    programmaticPlacementAccepted?: boolean;
    /**
     * Whether this directory site is available only via Publisher Portal.
     */
    publisherPortalOnly?: boolean;
    /**
     * Whether this directory site accepts publisher-paid tags.
     */
    pubPaidPlacementAccepted?: boolean;
  }
  /**
   * Represents a dimension.
   */
  export interface Schema$Dimension {
    /**
     * The kind of resource this is, in this case dfareporting#dimension.
     */
    kind?: string;
    /**
     * The dimension name, e.g. dfa:advertiser
     */
    name?: string;
  }
  /**
   * Represents a dimension filter.
   */
  export interface Schema$DimensionFilter {
    /**
     * The name of the dimension to filter.
     */
    dimensionName?: string;
    /**
     * The kind of resource this is, in this case dfareporting#dimensionFilter.
     */
    kind?: string;
    /**
     * The value of the dimension to filter.
     */
    value?: string;
  }
  /**
   * Represents a DimensionValue resource.
   */
  export interface Schema$DimensionValue {
    /**
     * The name of the dimension.
     */
    dimensionName?: string;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID associated with the value if available.
     */
    id?: string;
    /**
     * The kind of resource this is, in this case dfareporting#dimensionValue.
     */
    kind?: string;
    /**
     * Determines how the &#39;value&#39; field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, &#39;*&#39; is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions (&#39;dfa:paidSearch*&#39;) allow a matchType other than EXACT.
     */
    matchType?: string;
    /**
     * The value of the dimension.
     */
    value?: string;
  }
  /**
   * Represents the list of DimensionValue resources.
   */
  export interface Schema$DimensionValueList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The dimension values returned in this response.
     */
    items?: Schema$DimensionValue[];
    /**
     * The kind of list this is, in this case dfareporting#dimensionValueList.
     */
    kind?: string;
    /**
     * Continuation token used to page through dimension values. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }
  /**
   * Represents a DimensionValuesRequest.
   */
  export interface Schema$DimensionValueRequest {
    /**
     * The name of the dimension for which values should be requested.
     */
    dimensionName?: string;
    /**
     * The end date of the date range for which to retrieve dimension values. A string of the format &quot;yyyy-MM-dd&quot;.
     */
    endDate?: string;
    /**
     * The list of filters by which to filter values. The filters are ANDed.
     */
    filters?: Schema$DimensionFilter[];
    /**
     * The kind of request this is, in this case dfareporting#dimensionValueRequest.
     */
    kind?: string;
    /**
     * The start date of the date range for which to retrieve dimension values. A string of the format &quot;yyyy-MM-dd&quot;.
     */
    startDate?: string;
  }
  /**
   * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
   */
  export interface Schema$DirectorySite {
    /**
     * Whether this directory site is active.
     */
    active?: boolean;
    /**
     * Directory site contacts.
     */
    contactAssignments?: Schema$DirectorySiteContactAssignment[];
    /**
     * Country ID of this directory site. This is a read-only field.
     */
    countryId?: string;
    /**
     * Currency ID of this directory site. This is a read-only field. Possible values are:  - &quot;1&quot; for USD  - &quot;2&quot; for GBP  - &quot;3&quot; for ESP  - &quot;4&quot; for SEK  - &quot;5&quot; for CAD  - &quot;6&quot; for JPY  - &quot;7&quot; for DEM  - &quot;8&quot; for AUD  - &quot;9&quot; for FRF  - &quot;10&quot; for ITL  - &quot;11&quot; for DKK  - &quot;12&quot; for NOK  - &quot;13&quot; for FIM  - &quot;14&quot; for ZAR  - &quot;15&quot; for IEP  - &quot;16&quot; for NLG  - &quot;17&quot; for EUR  - &quot;18&quot; for KRW  - &quot;19&quot; for TWD  - &quot;20&quot; for SGD  - &quot;21&quot; for CNY  - &quot;22&quot; for HKD  - &quot;23&quot; for NZD  - &quot;24&quot; for MYR  - &quot;25&quot; for BRL  - &quot;26&quot; for PTE  - &quot;27&quot; for MXP  - &quot;28&quot; for CLP  - &quot;29&quot; for TRY  - &quot;30&quot; for ARS  - &quot;31&quot; for PEN  - &quot;32&quot; for ILS  - &quot;33&quot; for CHF  - &quot;34&quot; for VEF  - &quot;35&quot; for COP  - &quot;36&quot; for GTQ  - &quot;37&quot; for PLN  - &quot;39&quot; for INR  - &quot;40&quot; for THB  - &quot;41&quot; for IDR  - &quot;42&quot; for CZK  - &quot;43&quot; for RON  - &quot;44&quot; for HUF  - &quot;45&quot; for RUB  - &quot;46&quot; for AED  - &quot;47&quot; for BGN  - &quot;48&quot; for HRK  - &quot;49&quot; for MXN  - &quot;50&quot; for NGN
     */
    currencyId?: string;
    /**
     * Description of this directory site. This is a read-only field.
     */
    description?: string;
    /**
     * ID of this directory site. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this directory site. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Tag types for regular placements.  Acceptable values are: - &quot;STANDARD&quot; - &quot;IFRAME_JAVASCRIPT_INPAGE&quot; - &quot;INTERNAL_REDIRECT_INPAGE&quot; - &quot;JAVASCRIPT_INPAGE&quot;
     */
    inpageTagFormats?: string[];
    /**
     * Tag types for interstitial placements.  Acceptable values are: - &quot;IFRAME_JAVASCRIPT_INTERSTITIAL&quot; - &quot;INTERNAL_REDIRECT_INTERSTITIAL&quot; - &quot;JAVASCRIPT_INTERSTITIAL&quot;
     */
    interstitialTagFormats?: string[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#directorySite&quot;.
     */
    kind?: string;
    /**
     * Name of this directory site.
     */
    name?: string;
    /**
     * Parent directory site ID.
     */
    parentId?: string;
    /**
     * Directory site settings.
     */
    settings?: Schema$DirectorySiteSettings;
    /**
     * URL of this directory site.
     */
    url?: string;
  }
  /**
   * Contains properties of a Site Directory contact.
   */
  export interface Schema$DirectorySiteContact {
    /**
     * Address of this directory site contact.
     */
    address?: string;
    /**
     * Email address of this directory site contact.
     */
    email?: string;
    /**
     * First name of this directory site contact.
     */
    firstName?: string;
    /**
     * ID of this directory site contact. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#directorySiteContact&quot;.
     */
    kind?: string;
    /**
     * Last name of this directory site contact.
     */
    lastName?: string;
    /**
     * Phone number of this directory site contact.
     */
    phone?: string;
    /**
     * Directory site contact role.
     */
    role?: string;
    /**
     * Title or designation of this directory site contact.
     */
    title?: string;
    /**
     * Directory site contact type.
     */
    type?: string;
  }
  /**
   * Directory Site Contact Assignment
   */
  export interface Schema$DirectorySiteContactAssignment {
    /**
     * ID of this directory site contact. This is a read-only, auto-generated field.
     */
    contactId?: string;
    /**
     * Visibility of this directory site contact assignment. When set to PUBLIC this contact assignment is visible to all account and agency users; when set to PRIVATE it is visible only to the site.
     */
    visibility?: string;
  }
  /**
   * Directory Site Contact List Response
   */
  export interface Schema$DirectorySiteContactsListResponse {
    /**
     * Directory site contact collection
     */
    directorySiteContacts?: Schema$DirectorySiteContact[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#directorySiteContactsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Directory Site Settings
   */
  export interface Schema$DirectorySiteSettings {
    /**
     * Whether this directory site has disabled active view creatives.
     */
    activeViewOptOut?: boolean;
    /**
     * Directory site Ad Manager settings.
     */
    dfpSettings?: Schema$DfpSettings;
    /**
     * Whether this site accepts in-stream video ads.
     */
    instreamVideoPlacementAccepted?: boolean;
    /**
     * Whether this site accepts interstitial ads.
     */
    interstitialPlacementAccepted?: boolean;
    /**
     * Whether this directory site has disabled Nielsen OCR reach ratings.
     */
    nielsenOcrOptOut?: boolean;
    /**
     * Whether this directory site has disabled generation of Verification ins tags.
     */
    verificationTagOptOut?: boolean;
    /**
     * Whether this directory site has disabled active view for in-stream video creatives. This is a read-only field.
     */
    videoActiveViewOptOut?: boolean;
  }
  /**
   * Directory Site List Response
   */
  export interface Schema$DirectorySitesListResponse {
    /**
     * Directory site collection.
     */
    directorySites?: Schema$DirectorySite[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#directorySitesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
   */
  export interface Schema$DynamicTargetingKey {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#dynamicTargetingKey&quot;.
     */
    kind?: string;
    /**
     * Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
     */
    name?: string;
    /**
     * ID of the object of this dynamic targeting key. This is a required field.
     */
    objectId?: string;
    /**
     * Type of the object of this dynamic targeting key. This is a required field.
     */
    objectType?: string;
  }
  /**
   * Dynamic Targeting Key List Response
   */
  export interface Schema$DynamicTargetingKeysListResponse {
    /**
     * Dynamic targeting key collection.
     */
    dynamicTargetingKeys?: Schema$DynamicTargetingKey[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#dynamicTargetingKeysListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * A description of how user IDs are encrypted.
   */
  export interface Schema$EncryptionInfo {
    /**
     * The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityId?: string;
    /**
     * The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityType?: string;
    /**
     * Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
     */
    encryptionSource?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#encryptionInfo&quot;.
     */
    kind?: string;
  }
  /**
   * Contains properties of an event tag.
   */
  export interface Schema$EventTag {
    /**
     * Account ID of this event tag. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
     */
    campaignId?: string;
    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this event tag should be automatically enabled for all of the advertiser&#39;s campaigns and ads.
     */
    enabledByDefault?: boolean;
    /**
     * Whether to remove this event tag from ads that are trafficked through Display &amp; Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
     */
    excludeFromAdxRequests?: boolean;
    /**
     * ID of this event tag. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#eventTag&quot;.
     */
    kind?: string;
    /**
     * Name of this event tag. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
     */
    siteFilterType?: string;
    /**
     * Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a whitelist or blacklist filter.
     */
    siteIds?: string[];
    /**
     * Whether this tag is SSL-compliant or not. This is a read-only field.
     */
    sslCompliant?: boolean;
    /**
     * Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
     */
    status?: string;
    /**
     * Subaccount ID of this event tag. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
     */
    type?: string;
    /**
     * Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.
     */
    url?: string;
    /**
     * Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.
     */
    urlEscapeLevels?: number;
  }
  /**
   * Event tag override information.
   */
  export interface Schema$EventTagOverride {
    /**
     * Whether this override is enabled.
     */
    enabled?: boolean;
    /**
     * ID of this event tag override. This is a read-only, auto-generated field.
     */
    id?: string;
  }
  /**
   * Event Tag List Response
   */
  export interface Schema$EventTagsListResponse {
    /**
     * Event tag collection.
     */
    eventTags?: Schema$EventTag[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#eventTagsListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is &quot;REPORT_AVAILABLE&quot;.
   */
  export interface Schema$File {
    /**
     * The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.
     */
    dateRange?: Schema$DateRange;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The filename of the file.
     */
    fileName?: string;
    /**
     * The output format of the report. Only available once the file is available.
     */
    format?: string;
    /**
     * The unique ID of this report file.
     */
    id?: string;
    /**
     * The kind of resource this is, in this case dfareporting#file.
     */
    kind?: string;
    /**
     * The timestamp in milliseconds since epoch when this file was last modified.
     */
    lastModifiedTime?: string;
    /**
     * The ID of the report this file was generated from.
     */
    reportId?: string;
    /**
     * The status of the report file.
     */
    status?: string;
    /**
     * The URLs where the completed report file can be downloaded.
     */
    urls?: {apiUrl?: string; browserUrl?: string};
  }
  /**
   * Represents the list of File resources.
   */
  export interface Schema$FileList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The files returned in this response.
     */
    items?: Schema$File[];
    /**
     * The kind of list this is, in this case dfareporting#fileList.
     */
    kind?: string;
    /**
     * Continuation token used to page through files. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }
  /**
   * Flight
   */
  export interface Schema$Flight {
    /**
     * Inventory item flight end date.
     */
    endDate?: string;
    /**
     * Rate or cost of this flight.
     */
    rateOrCost?: string;
    /**
     * Inventory item flight start date.
     */
    startDate?: string;
    /**
     * Units of this flight.
     */
    units?: string;
  }
  /**
   * Floodlight Activity GenerateTag Response
   */
  export interface Schema$FloodlightActivitiesGenerateTagResponse {
    /**
     * Generated tag for this Floodlight activity. For global site tags, this is the event snippet.
     */
    floodlightActivityTag?: string;
    /**
     * The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more.
     */
    globalSiteTagGlobalSnippet?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightActivitiesGenerateTagResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Floodlight Activity List Response
   */
  export interface Schema$FloodlightActivitiesListResponse {
    /**
     * Floodlight activity collection.
     */
    floodlightActivities?: Schema$FloodlightActivity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightActivitiesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Contains properties of a Floodlight activity.
   */
  export interface Schema$FloodlightActivity {
    /**
     * Account ID of this floodlight activity. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group&#39;s advertiser or the existing activity&#39;s advertiser.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING.
     */
    cacheBustingType?: string;
    /**
     * Counting method for conversions for this floodlight activity. This is a required field.
     */
    countingMethod?: string;
    /**
     * Dynamic floodlight tags.
     */
    defaultTags?: Schema$FloodlightActivityDynamicTag[];
    /**
     * URL where this tag will be deployed. If specified, must be less than 256 characters long.
     */
    expectedUrl?: string;
    /**
     * Floodlight activity group ID of this floodlight activity. This is a required field.
     */
    floodlightActivityGroupId?: string;
    /**
     * Name of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupName?: string;
    /**
     * Tag string of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupTagString?: string;
    /**
     * Type of the associated floodlight activity group. This is a read-only field.
     */
    floodlightActivityGroupType?: string;
    /**
     * Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group&#39;s floodlight configuration or from the existing activity&#39;s floodlight configuration.
     */
    floodlightConfigurationId?: string;
    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
    /**
     * The type of Floodlight tag this activity will generate. This is a required field.
     */
    floodlightTagType?: string;
    /**
     * Whether this activity is archived.
     */
    hidden?: boolean;
    /**
     * ID of this floodlight activity. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightActivity&quot;.
     */
    kind?: string;
    /**
     * Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.
     */
    name?: string;
    /**
     * General notes or implementation instructions for the tag.
     */
    notes?: string;
    /**
     * Publisher dynamic floodlight tags.
     */
    publisherTags?: Schema$FloodlightActivityPublisherDynamicTag[];
    /**
     * Whether this tag should use SSL.
     */
    secure?: boolean;
    /**
     * Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.
     */
    sslCompliant?: boolean;
    /**
     * Whether this floodlight activity must be SSL-compliant.
     */
    sslRequired?: boolean;
    /**
     * Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
     */
    tagFormat?: string;
    /**
     * Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion.
     */
    tagString?: string;
    /**
     * List of the user-defined variables used by this conversion tag. These map to the &quot;u[1-100]=&quot; in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive.
     */
    userDefinedVariableTypes?: string[];
  }
  /**
   * Dynamic Tag
   */
  export interface Schema$FloodlightActivityDynamicTag {
    /**
     * ID of this dynamic tag. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Name of this tag.
     */
    name?: string;
    /**
     * Tag code.
     */
    tag?: string;
  }
  /**
   * Contains properties of a Floodlight activity group.
   */
  export interface Schema$FloodlightActivityGroup {
    /**
     * Account ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration&#39;s advertiser or from the existing activity group&#39;s advertiser.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Floodlight configuration ID of this floodlight activity group. This is a required field.
     */
    floodlightConfigurationId?: string;
    /**
     * Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.
     */
    floodlightConfigurationIdDimensionValue?: Schema$DimensionValue;
    /**
     * ID of this floodlight activity group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightActivityGroup&quot;.
     */
    kind?: string;
    /**
     * Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
     */
    name?: string;
    /**
     * Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.
     */
    tagString?: string;
    /**
     * Type of the floodlight activity group. This is a required field that is read-only after insertion.
     */
    type?: string;
  }
  /**
   * Floodlight Activity Group List Response
   */
  export interface Schema$FloodlightActivityGroupsListResponse {
    /**
     * Floodlight activity group collection.
     */
    floodlightActivityGroups?: Schema$FloodlightActivityGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightActivityGroupsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Publisher Dynamic Tag
   */
  export interface Schema$FloodlightActivityPublisherDynamicTag {
    /**
     * Whether this tag is applicable only for click-throughs.
     */
    clickThrough?: boolean;
    /**
     * Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
     */
    directorySiteId?: string;
    /**
     * Dynamic floodlight tag.
     */
    dynamicTag?: Schema$FloodlightActivityDynamicTag;
    /**
     * Site ID of this dynamic tag.
     */
    siteId?: string;
    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this tag is applicable only for view-throughs.
     */
    viewThrough?: boolean;
  }
  /**
   * Contains properties of a Floodlight configuration.
   */
  export interface Schema$FloodlightConfiguration {
    /**
     * Account ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of the parent advertiser of this floodlight configuration.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether advertiser data is shared with Google Analytics.
     */
    analyticsDataSharingEnabled?: boolean;
    /**
     * Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
     */
    exposureToConversionEnabled?: boolean;
    /**
     * Day that will be counted as the first day of the week in reports. This is a required field.
     */
    firstDayOfWeek?: string;
    /**
     * ID of this floodlight configuration. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Whether in-app attribution tracking is enabled.
     */
    inAppAttributionTrackingEnabled?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightConfiguration&quot;.
     */
    kind?: string;
    /**
     * Lookback window settings for this floodlight configuration.
     */
    lookbackConfiguration?: Schema$LookbackConfiguration;
    /**
     * Types of attribution options for natural search conversions.
     */
    naturalSearchConversionAttributionOption?: string;
    /**
     * Settings for Campaign Manager Omniture integration.
     */
    omnitureSettings?: Schema$OmnitureSettings;
    /**
     * Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
    /**
     * Configuration settings for dynamic and image floodlight tags.
     */
    tagSettings?: Schema$TagSettings;
    /**
     * List of third-party authentication tokens enabled for this configuration.
     */
    thirdPartyAuthenticationTokens?: Schema$ThirdPartyAuthenticationToken[];
    /**
     * List of user defined variables enabled for this configuration.
     */
    userDefinedVariableConfigurations?: Schema$UserDefinedVariableConfiguration[];
  }
  /**
   * Floodlight Configuration List Response
   */
  export interface Schema$FloodlightConfigurationsListResponse {
    /**
     * Floodlight configuration collection.
     */
    floodlightConfigurations?: Schema$FloodlightConfiguration[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#floodlightConfigurationsListResponse&quot;.
     */
    kind?: string;
  }
  /**
   * Represents fields that are compatible to be selected for a report of type &quot;FlOODLIGHT&quot;.
   */
  export interface Schema$FloodlightReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensionFilters&quot; section of the report.
     */
    dimensionFilters?: Schema$Dimension[];
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensions&quot; section of the report.
     */
    dimensions?: Schema$Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the &quot;metricNames&quot; section of the report.
     */
    metrics?: Schema$Metric[];
  }
  /**
   * Frequency Cap.
   */
  export interface Schema$FrequencyCap {
    /**
     * Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.
     */
    duration?: string;
    /**
     * Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.
     */
    impressions?: string;
  }
  /**
   * FsCommand.
   */
  export interface Schema$FsCommand {
    /**
     * Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    left?: number;
    /**
     * Position in the browser where the window will open.
     */
    positionOption?: string;
    /**
     * Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
     */
    top?: number;
    /**
     * Height of the window.
     */
    windowHeight?: number;
    /**
     * Width of the window.
     */
    windowWidth?: number;
  }
  /**
   * Geographical Targeting.
   */
  export interface Schema$GeoTargeting {
    /**
     * Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.
     */
    cities?: Schema$City[];
    /**
     * Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.
     */
    countries?: Schema$Country[];
    /**
     * Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad.
     */
    excludeCountries?: boolean;
    /**
     * Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.
     */
    metros?: Schema$Metro[];
    /**
     * Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.
     */
    postalCodes?: Schema$PostalCode[];
    /**
     * Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.
     */
    regions?: Schema$Region[];
  }
  /**
   * Represents a buy from the Planning inventory store.
   */
  export interface Schema$InventoryItem {
    /**
     * Account ID of this inventory item.
     */
    accountId?: string;
    /**
     * Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
     */
    adSlots?: Schema$AdSlot[];
    /**
     * Advertiser ID of this inventory item.
     */
    advertiserId?: string;
    /**
     * Content category ID of this inventory item.
     */
    contentCategoryId?: string;
    /**
     * Estimated click-through rate of this inventory item.
     */
    estimatedClickThroughRate?: string;
    /**
     * Estimated conversion rate of this inventory item.
     */
    estimatedConversionRate?: string;
    /**
     * ID of this inventory item.
     */
    id?: string;
    /**
     * Whether this inventory item is in plan.
     */
    inPlan?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#inventoryItem&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this inventory item.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.
     */
    name?: string;
    /**
     * Negotiation channel ID of this inventory item.
     */
    negotiationChannelId?: string;
    /**
     * Order ID of this inventory item.
     */
    orderId?: string;
    /**
     * Placement strategy ID of this inventory item.
     */
    placementStrategyId?: string;
    /**
     * Pricing of this inventory item.
     */
    pricing?: Schema$Pricing;
    /**
     * Project ID of this inventory item.
     */
    projectId?: string;
    /**
     * RFP ID of this inventory item.
     */
    rfpId?: string;
    /**
     * ID of the site this inventory item is associated with.
     */
    siteId?: string;
    /**
     * Subaccount ID of this inventory item.
     */
    subaccountId?: string;
    /**
     * Type of inventory item.
     */
    type?: string;
  }
  /**
   * Inventory item List Response
   */
  export interface Schema$InventoryItemsListResponse {
    /**
     * Inventory item collection
     */
    inventoryItems?: Schema$InventoryItem[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#inventoryItemsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Key Value Targeting Expression.
   */
  export interface Schema$KeyValueTargetingExpression {
    /**
     * Keyword expression being targeted by the ad.
     */
    expression?: string;
  }
  /**
   * Contains information about where a user&#39;s browser is taken after the user clicks an ad.
   */
  export interface Schema$LandingPage {
    /**
     * Advertiser ID of this landing page. This is a required field.
     */
    advertiserId?: string;
    /**
     * Whether this landing page has been archived.
     */
    archived?: boolean;
    /**
     * Links that will direct the user to a mobile app, if installed.
     */
    deepLinks?: Schema$DeepLink[];
    /**
     * ID of this landing page. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#landingPage&quot;.
     */
    kind?: string;
    /**
     * Name of this landing page. This is a required field. It must be less than 256 characters long.
     */
    name?: string;
    /**
     * URL of this landing page. This is a required field.
     */
    url?: string;
  }
  /**
   * Contains information about a language that can be targeted by ads.
   */
  export interface Schema$Language {
    /**
     * Language ID of this language. This is the ID used for targeting and generating reports.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#language&quot;.
     */
    kind?: string;
    /**
     * Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are &quot;en&quot; for English or &quot;zh_CN&quot; for Simplified Chinese.
     */
    languageCode?: string;
    /**
     * Name of this language.
     */
    name?: string;
  }
  /**
   * Language List Response
   */
  export interface Schema$LanguagesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#languagesListResponse&quot;.
     */
    kind?: string;
    /**
     * Language collection.
     */
    languages?: Schema$Language[];
  }
  /**
   * Language Targeting.
   */
  export interface Schema$LanguageTargeting {
    /**
     * Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated.
     */
    languages?: Schema$Language[];
  }
  /**
   * Modification timestamp.
   */
  export interface Schema$LastModifiedInfo {
    /**
     * Timestamp of the last change in milliseconds since epoch.
     */
    time?: string;
  }
  /**
   * A group clause made up of list population terms representing constraints joined by ORs.
   */
  export interface Schema$ListPopulationClause {
    /**
     * Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
     */
    terms?: Schema$ListPopulationTerm[];
  }
  /**
   * Remarketing List Population Rule.
   */
  export interface Schema$ListPopulationRule {
    /**
     * Floodlight activity ID associated with this rule. This field can be left blank.
     */
    floodlightActivityId?: string;
    /**
     * Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
     */
    floodlightActivityName?: string;
    /**
     * Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.
     */
    listPopulationClauses?: Schema$ListPopulationClause[];
  }
  /**
   * Remarketing List Population Rule Term.
   */
  export interface Schema$ListPopulationTerm {
    /**
     * Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
     */
    contains?: boolean;
    /**
     * Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    negation?: boolean;
    /**
     * Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    operator?: string;
    /**
     * ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
     */
    remarketingListId?: string;
    /**
     * List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
     */
    type?: string;
    /**
     * Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    value?: string;
    /**
     * Friendly name of this term&#39;s variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.
     */
    variableFriendlyName?: string;
    /**
     * Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.
     */
    variableName?: string;
  }
  /**
   * Remarketing List Targeting Expression.
   */
  export interface Schema$ListTargetingExpression {
    /**
     * Expression describing which lists are being targeted by the ad.
     */
    expression?: string;
  }
  /**
   * Lookback configuration settings.
   */
  export interface Schema$LookbackConfiguration {
    /**
     * Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
     */
    clickDuration?: number;
    /**
     * Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
     */
    postImpressionActivitiesDuration?: number;
  }
  /**
   * Represents a metric.
   */
  export interface Schema$Metric {
    /**
     * The kind of resource this is, in this case dfareporting#metric.
     */
    kind?: string;
    /**
     * The metric name, e.g. dfa:impressions
     */
    name?: string;
  }
  /**
   * Contains information about a metro region that can be targeted by ads.
   */
  export interface Schema$Metro {
    /**
     * Country code of the country to which this metro region belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this metro region belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this metro region.
     */
    dartId?: string;
    /**
     * DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
     */
    dmaId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#metro&quot;.
     */
    kind?: string;
    /**
     * Metro code of this metro region. This is equivalent to dma_id.
     */
    metroCode?: string;
    /**
     * Name of this metro region.
     */
    name?: string;
  }
  /**
   * Metro List Response
   */
  export interface Schema$MetrosListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#metrosListResponse&quot;.
     */
    kind?: string;
    /**
     * Metro collection.
     */
    metros?: Schema$Metro[];
  }
  /**
   * Contains information about a mobile app. Used as a landing page deep link.
   */
  export interface Schema$MobileApp {
    /**
     * Mobile app directory.
     */
    directory?: string;
    /**
     * ID of this mobile app.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#mobileApp&quot;.
     */
    kind?: string;
    /**
     * Publisher name.
     */
    publisherName?: string;
    /**
     * Title of this mobile app.
     */
    title?: string;
  }
  /**
   * Mobile app List Response
   */
  export interface Schema$MobileAppsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#mobileAppsListResponse&quot;.
     */
    kind?: string;
    /**
     * Mobile apps collection.
     */
    mobileApps?: Schema$MobileApp[];
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
  }
  /**
   * Contains information about a mobile carrier that can be targeted by ads.
   */
  export interface Schema$MobileCarrier {
    /**
     * Country code of the country to which this mobile carrier belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this mobile carrier belongs.
     */
    countryDartId?: string;
    /**
     * ID of this mobile carrier.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#mobileCarrier&quot;.
     */
    kind?: string;
    /**
     * Name of this mobile carrier.
     */
    name?: string;
  }
  /**
   * Mobile Carrier List Response
   */
  export interface Schema$MobileCarriersListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#mobileCarriersListResponse&quot;.
     */
    kind?: string;
    /**
     * Mobile carrier collection.
     */
    mobileCarriers?: Schema$MobileCarrier[];
  }
  /**
   * Object Filter.
   */
  export interface Schema$ObjectFilter {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#objectFilter&quot;.
     */
    kind?: string;
    /**
     * Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
     */
    objectIds?: string[];
    /**
     * Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.
     */
    status?: string;
  }
  /**
   * Offset Position.
   */
  export interface Schema$OffsetPosition {
    /**
     * Offset distance from left side of an asset or a window.
     */
    left?: number;
    /**
     * Offset distance from top side of an asset or a window.
     */
    top?: number;
  }
  /**
   * Omniture Integration Settings.
   */
  export interface Schema$OmnitureSettings {
    /**
     * Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
     */
    omnitureCostDataEnabled?: boolean;
    /**
     * Whether Omniture integration is enabled. This property can be enabled only when the &quot;Advanced Ad Serving&quot; account setting is enabled.
     */
    omnitureIntegrationEnabled?: boolean;
  }
  /**
   * Contains information about an operating system that can be targeted by ads.
   */
  export interface Schema$OperatingSystem {
    /**
     * DART ID of this operating system. This is the ID used for targeting.
     */
    dartId?: string;
    /**
     * Whether this operating system is for desktop.
     */
    desktop?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#operatingSystem&quot;.
     */
    kind?: string;
    /**
     * Whether this operating system is for mobile.
     */
    mobile?: boolean;
    /**
     * Name of this operating system.
     */
    name?: string;
  }
  /**
   * Operating System List Response
   */
  export interface Schema$OperatingSystemsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#operatingSystemsListResponse&quot;.
     */
    kind?: string;
    /**
     * Operating system collection.
     */
    operatingSystems?: Schema$OperatingSystem[];
  }
  /**
   * Contains information about a particular version of an operating system that can be targeted by ads.
   */
  export interface Schema$OperatingSystemVersion {
    /**
     * ID of this operating system version.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#operatingSystemVersion&quot;.
     */
    kind?: string;
    /**
     * Major version (leftmost number) of this operating system version.
     */
    majorVersion?: string;
    /**
     * Minor version (number after the first dot) of this operating system version.
     */
    minorVersion?: string;
    /**
     * Name of this operating system version.
     */
    name?: string;
    /**
     * Operating system of this operating system version.
     */
    operatingSystem?: Schema$OperatingSystem;
  }
  /**
   * Operating System Version List Response
   */
  export interface Schema$OperatingSystemVersionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#operatingSystemVersionsListResponse&quot;.
     */
    kind?: string;
    /**
     * Operating system version collection.
     */
    operatingSystemVersions?: Schema$OperatingSystemVersion[];
  }
  /**
   * Creative optimization activity.
   */
  export interface Schema$OptimizationActivity {
    /**
     * Floodlight activity ID of this optimization activity. This is a required field.
     */
    floodlightActivityId?: string;
    /**
     * Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.
     */
    floodlightActivityIdDimensionValue?: Schema$DimensionValue;
    /**
     * Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1.
     */
    weight?: number;
  }
  /**
   * Describes properties of a Planning order.
   */
  export interface Schema$Order {
    /**
     * Account ID of this order.
     */
    accountId?: string;
    /**
     * Advertiser ID of this order.
     */
    advertiserId?: string;
    /**
     * IDs for users that have to approve documents created for this order.
     */
    approverUserProfileIds?: string[];
    /**
     * Buyer invoice ID associated with this order.
     */
    buyerInvoiceId?: string;
    /**
     * Name of the buyer organization.
     */
    buyerOrganizationName?: string;
    /**
     * Comments in this order.
     */
    comments?: string;
    /**
     * Contacts for this order.
     */
    contacts?: Schema$OrderContact[];
    /**
     * ID of this order. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#order&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this order.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Name of this order.
     */
    name?: string;
    /**
     * Notes of this order.
     */
    notes?: string;
    /**
     * ID of the terms and conditions template used in this order.
     */
    planningTermId?: string;
    /**
     * Project ID of this order.
     */
    projectId?: string;
    /**
     * Seller order ID associated with this order.
     */
    sellerOrderId?: string;
    /**
     * Name of the seller organization.
     */
    sellerOrganizationName?: string;
    /**
     * Site IDs this order is associated with.
     */
    siteId?: string[];
    /**
     * Free-form site names this order is associated with.
     */
    siteNames?: string[];
    /**
     * Subaccount ID of this order.
     */
    subaccountId?: string;
    /**
     * Terms and conditions of this order.
     */
    termsAndConditions?: string;
  }
  /**
   * Contact of an order.
   */
  export interface Schema$OrderContact {
    /**
     * Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.
     */
    contactInfo?: string;
    /**
     * Name of this contact.
     */
    contactName?: string;
    /**
     * Title of this contact.
     */
    contactTitle?: string;
    /**
     * Type of this contact.
     */
    contactType?: string;
    /**
     * ID of the user profile containing the signature that will be embedded into order documents.
     */
    signatureUserProfileId?: string;
  }
  /**
   * Contains properties of a Planning order document.
   */
  export interface Schema$OrderDocument {
    /**
     * Account ID of this order document.
     */
    accountId?: string;
    /**
     * Advertiser ID of this order document.
     */
    advertiserId?: string;
    /**
     * The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.
     */
    amendedOrderDocumentId?: string;
    /**
     * IDs of users who have approved this order document.
     */
    approvedByUserProfileIds?: string[];
    /**
     * Whether this order document is cancelled.
     */
    cancelled?: boolean;
    /**
     * Information about the creation of this order document.
     */
    createdInfo?: Schema$LastModifiedInfo;
    /**
     * Effective date of this order document.
     */
    effectiveDate?: string;
    /**
     * ID of this order document.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#orderDocument&quot;.
     */
    kind?: string;
    /**
     * List of email addresses that received the last sent document.
     */
    lastSentRecipients?: string[];
    /**
     * Timestamp of the last email sent with this order document.
     */
    lastSentTime?: string;
    /**
     * ID of the order from which this order document is created.
     */
    orderId?: string;
    /**
     * Project ID of this order document.
     */
    projectId?: string;
    /**
     * Whether this order document has been signed.
     */
    signed?: boolean;
    /**
     * Subaccount ID of this order document.
     */
    subaccountId?: string;
    /**
     * Title of this order document.
     */
    title?: string;
    /**
     * Type of this order document
     */
    type?: string;
  }
  /**
   * Order document List Response
   */
  export interface Schema$OrderDocumentsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#orderDocumentsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Order document collection
     */
    orderDocuments?: Schema$OrderDocument[];
  }
  /**
   * Order List Response
   */
  export interface Schema$OrdersListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#ordersListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Order collection.
     */
    orders?: Schema$Order[];
  }
  /**
   * Represents fields that are compatible to be selected for a report of type &quot;PATH_TO_CONVERSION&quot;.
   */
  export interface Schema$PathToConversionReportCompatibleFields {
    /**
     * Conversion dimensions which are compatible to be selected in the &quot;conversionDimensions&quot; section of the report.
     */
    conversionDimensions?: Schema$Dimension[];
    /**
     * Custom floodlight variables which are compatible to be selected in the &quot;customFloodlightVariables&quot; section of the report.
     */
    customFloodlightVariables?: Schema$Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the &quot;metricNames&quot; section of the report.
     */
    metrics?: Schema$Metric[];
    /**
     * Per-interaction dimensions which are compatible to be selected in the &quot;perInteractionDimensions&quot; section of the report.
     */
    perInteractionDimensions?: Schema$Dimension[];
  }
  /**
   * Contains properties of a placement.
   */
  export interface Schema$Placement {
    /**
     * Account ID of this placement. This field can be left blank.
     */
    accountId?: string;
    /**
     * Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.
     */
    adBlockingOptOut?: boolean;
    /**
     * Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
     */
    additionalSizes?: Schema$Size[];
    /**
     * Advertiser ID of this placement. This field can be left blank.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this placement is archived.
     */
    archived?: boolean;
    /**
     * Campaign ID of this placement. This field is a required field on insertion.
     */
    campaignId?: string;
    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: Schema$DimensionValue;
    /**
     * Comments for this placement.
     */
    comment?: string;
    /**
     * Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
     */
    compatibility?: string;
    /**
     * ID of the content category assigned to this placement.
     */
    contentCategoryId?: string;
    /**
     * Information about the creation of this placement. This is a read-only field.
     */
    createInfo?: Schema$LastModifiedInfo;
    /**
     * Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: Schema$DimensionValue;
    /**
     * External ID for this placement.
     */
    externalId?: string;
    /**
     * ID of this placement. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this placement. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Key name of this placement. This is a read-only, auto-generated field.
     */
    keyName?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placement&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this placement. This is a read-only field.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Lookback window settings for this placement.
     */
    lookbackConfiguration?: Schema$LookbackConfiguration;
    /**
     * Name of this placement.This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
     */
    paymentApproved?: boolean;
    /**
     * Payment source for this placement. This is a required field that is read-only after insertion.
     */
    paymentSource?: string;
    /**
     * ID of this placement&#39;s group, if applicable.
     */
    placementGroupId?: string;
    /**
     * Dimension value for the ID of the placement group. This is a read-only, auto-generated field.
     */
    placementGroupIdDimensionValue?: Schema$DimensionValue;
    /**
     * ID of the placement strategy assigned to this placement.
     */
    placementStrategyId?: string;
    /**
     * Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType.
     */
    pricingSchedule?: Schema$PricingSchedule;
    /**
     * Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock&#39;s primaryPlacementId field to the ID of this placement.
     */
    primary?: boolean;
    /**
     * Information about the last publisher update. This is a read-only field.
     */
    publisherUpdateInfo?: Schema$LastModifiedInfo;
    /**
     * Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
     */
    siteId?: string;
    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: Schema$DimensionValue;
    /**
     * Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion.
     */
    size?: Schema$Size;
    /**
     * Whether creatives assigned to this placement must be SSL-compliant.
     */
    sslRequired?: boolean;
    /**
     * Third-party placement status.
     */
    status?: string;
    /**
     * Subaccount ID of this placement. This field can be left blank.
     */
    subaccountId?: string;
    /**
     * Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - &quot;PLACEMENT_TAG_STANDARD&quot; - &quot;PLACEMENT_TAG_IFRAME_JAVASCRIPT&quot; - &quot;PLACEMENT_TAG_IFRAME_ILAYER&quot; - &quot;PLACEMENT_TAG_INTERNAL_REDIRECT&quot; - &quot;PLACEMENT_TAG_JAVASCRIPT&quot; - &quot;PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT&quot; - &quot;PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT&quot; - &quot;PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT&quot; - &quot;PLACEMENT_TAG_CLICK_COMMANDS&quot; - &quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH&quot; - &quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3&quot; - &quot;PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4&quot; - &quot;PLACEMENT_TAG_TRACKING&quot; - &quot;PLACEMENT_TAG_TRACKING_IFRAME&quot; - &quot;PLACEMENT_TAG_TRACKING_JAVASCRIPT&quot;
     */
    tagFormats?: string[];
    /**
     * Tag settings for this placement.
     */
    tagSetting?: Schema$TagSetting;
    /**
     * Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.
     */
    videoActiveViewOptOut?: boolean;
    /**
     * A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility.
     */
    videoSettings?: Schema$VideoSettings;
    /**
     * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement.  Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoice?: string;
  }
  /**
   * Placement Assignment.
   */
  export interface Schema$PlacementAssignment {
    /**
     * Whether this placement assignment is active. When true, the placement will be included in the ad&#39;s rotation.
     */
    active?: boolean;
    /**
     * ID of the placement to be assigned. This is a required field.
     */
    placementId?: string;
    /**
     * Dimension value for the ID of the placement. This is a read-only, auto-generated field.
     */
    placementIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    sslRequired?: boolean;
  }
  /**
   * Contains properties of a package or roadblock.
   */
  export interface Schema$PlacementGroup {
    /**
     * Account ID of this placement group. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Advertiser ID of this placement group. This is a required field on insertion.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Whether this placement group is archived.
     */
    archived?: boolean;
    /**
     * Campaign ID of this placement group. This field is required on insertion.
     */
    campaignId?: string;
    /**
     * Dimension value for the ID of the campaign. This is a read-only, auto-generated field.
     */
    campaignIdDimensionValue?: Schema$DimensionValue;
    /**
     * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
     */
    childPlacementIds?: string[];
    /**
     * Comments for this placement group.
     */
    comment?: string;
    /**
     * ID of the content category assigned to this placement group.
     */
    contentCategoryId?: string;
    /**
     * Information about the creation of this placement group. This is a read-only field.
     */
    createInfo?: Schema$LastModifiedInfo;
    /**
     * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: Schema$DimensionValue;
    /**
     * External ID for this placement.
     */
    externalId?: string;
    /**
     * ID of this placement group. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this placement group. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementGroup&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this placement group. This is a read-only field.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Name of this placement group. This is a required field and must be less than 256 characters long.
     */
    name?: string;
    /**
     * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
     */
    placementGroupType?: string;
    /**
     * ID of the placement strategy assigned to this placement group.
     */
    placementStrategyId?: string;
    /**
     * Pricing schedule of this placement group. This field is required on insertion.
     */
    pricingSchedule?: Schema$PricingSchedule;
    /**
     * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
     */
    primaryPlacementId?: string;
    /**
     * Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.
     */
    primaryPlacementIdDimensionValue?: Schema$DimensionValue;
    /**
     * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     */
    siteId?: string;
    /**
     * Dimension value for the ID of the site. This is a read-only, auto-generated field.
     */
    siteIdDimensionValue?: Schema$DimensionValue;
    /**
     * Subaccount ID of this placement group. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }
  /**
   * Placement Group List Response
   */
  export interface Schema$PlacementGroupsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementGroupsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement group collection.
     */
    placementGroups?: Schema$PlacementGroup[];
  }
  /**
   * Placement GenerateTags Response
   */
  export interface Schema$PlacementsGenerateTagsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementsGenerateTagsResponse&quot;.
     */
    kind?: string;
    /**
     * Set of generated tags for the specified placements.
     */
    placementTags?: Schema$PlacementTag[];
  }
  /**
   * Placement List Response
   */
  export interface Schema$PlacementsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement collection.
     */
    placements?: Schema$Placement[];
  }
  /**
   * Placement Strategy List Response
   */
  export interface Schema$PlacementStrategiesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementStrategiesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Placement strategy collection.
     */
    placementStrategies?: Schema$PlacementStrategy[];
  }
  /**
   * Contains properties of a placement strategy.
   */
  export interface Schema$PlacementStrategy {
    /**
     * Account ID of this placement strategy.This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * ID of this placement strategy. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#placementStrategy&quot;.
     */
    kind?: string;
    /**
     * Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.
     */
    name?: string;
  }
  /**
   * Placement Tag
   */
  export interface Schema$PlacementTag {
    /**
     * Placement ID
     */
    placementId?: string;
    /**
     * Tags generated for this placement.
     */
    tagDatas?: Schema$TagData[];
  }
  /**
   * Contains information about a platform type that can be targeted by ads.
   */
  export interface Schema$PlatformType {
    /**
     * ID of this platform type.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#platformType&quot;.
     */
    kind?: string;
    /**
     * Name of this platform type.
     */
    name?: string;
  }
  /**
   * Platform Type List Response
   */
  export interface Schema$PlatformTypesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#platformTypesListResponse&quot;.
     */
    kind?: string;
    /**
     * Platform type collection.
     */
    platformTypes?: Schema$PlatformType[];
  }
  /**
   * Popup Window Properties.
   */
  export interface Schema$PopupWindowProperties {
    /**
     * Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID
     */
    dimension?: Schema$Size;
    /**
     * Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.
     */
    offset?: Schema$OffsetPosition;
    /**
     * Popup window position either centered or at specific coordinate.
     */
    positionType?: string;
    /**
     * Whether to display the browser address bar.
     */
    showAddressBar?: boolean;
    /**
     * Whether to display the browser menu bar.
     */
    showMenuBar?: boolean;
    /**
     * Whether to display the browser scroll bar.
     */
    showScrollBar?: boolean;
    /**
     * Whether to display the browser status bar.
     */
    showStatusBar?: boolean;
    /**
     * Whether to display the browser tool bar.
     */
    showToolBar?: boolean;
    /**
     * Title of popup window.
     */
    title?: string;
  }
  /**
   * Contains information about a postal code that can be targeted by ads.
   */
  export interface Schema$PostalCode {
    /**
     * Postal code. This is equivalent to the id field.
     */
    code?: string;
    /**
     * Country code of the country to which this postal code belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this postal code belongs.
     */
    countryDartId?: string;
    /**
     * ID of this postal code.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#postalCode&quot;.
     */
    kind?: string;
  }
  /**
   * Postal Code List Response
   */
  export interface Schema$PostalCodesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#postalCodesListResponse&quot;.
     */
    kind?: string;
    /**
     * Postal code collection.
     */
    postalCodes?: Schema$PostalCode[];
  }
  /**
   * Pricing Information
   */
  export interface Schema$Pricing {
    /**
     * Cap cost type of this inventory item.
     */
    capCostType?: string;
    /**
     * End date of this inventory item.
     */
    endDate?: string;
    /**
     * Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
     */
    flights?: Schema$Flight[];
    /**
     * Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
     */
    groupType?: string;
    /**
     * Pricing type of this inventory item.
     */
    pricingType?: string;
    /**
     * Start date of this inventory item.
     */
    startDate?: string;
  }
  /**
   * Pricing Schedule
   */
  export interface Schema$PricingSchedule {
    /**
     * Placement cap cost option.
     */
    capCostOption?: string;
    /**
     * Whether cap costs are ignored by ad serving.
     */
    disregardOverdelivery?: boolean;
    /**
     * Placement end date. This date must be later than, or the same day as, the placement start date, but not later than the campaign end date. If, for example, you set 6/25/2015 as both the start and end dates, the effective placement date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This field is required on insertion.
     */
    endDate?: string;
    /**
     * Whether this placement is flighted. If true, pricing periods will be computed automatically.
     */
    flighted?: boolean;
    /**
     * Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
     */
    floodlightActivityId?: string;
    /**
     * Pricing periods for this placement.
     */
    pricingPeriods?: Schema$PricingSchedulePricingPeriod[];
    /**
     * Placement pricing type. This field is required on insertion.
     */
    pricingType?: string;
    /**
     * Placement start date. This date must be later than, or the same day as, the campaign start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This field is required on insertion.
     */
    startDate?: string;
    /**
     * Testing start date of this placement. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error.
     */
    testingStartDate?: string;
  }
  /**
   * Pricing Period
   */
  export interface Schema$PricingSchedulePricingPeriod {
    /**
     * Pricing period end date. This date must be later than, or the same day as, the pricing period start date, but not later than the placement end date. The period end date can be the same date as the period start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective pricing period date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error.
     */
    endDate?: string;
    /**
     * Comments for this pricing period.
     */
    pricingComment?: string;
    /**
     * Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.
     */
    rateOrCostNanos?: string;
    /**
     * Pricing period start date. This date must be later than, or the same day as, the placement start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error.
     */
    startDate?: string;
    /**
     * Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.
     */
    units?: string;
  }
  /**
   * Contains properties of a Planning project.
   */
  export interface Schema$Project {
    /**
     * Account ID of this project.
     */
    accountId?: string;
    /**
     * Advertiser ID of this project.
     */
    advertiserId?: string;
    /**
     * Audience age group of this project.
     */
    audienceAgeGroup?: string;
    /**
     * Audience gender of this project.
     */
    audienceGender?: string;
    /**
     * Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.
     */
    budget?: string;
    /**
     * Client billing code of this project.
     */
    clientBillingCode?: string;
    /**
     * Name of the project client.
     */
    clientName?: string;
    /**
     * End date of the project.
     */
    endDate?: string;
    /**
     * ID of this project. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#project&quot;.
     */
    kind?: string;
    /**
     * Information about the most recent modification of this project.
     */
    lastModifiedInfo?: Schema$LastModifiedInfo;
    /**
     * Name of this project.
     */
    name?: string;
    /**
     * Overview of this project.
     */
    overview?: string;
    /**
     * Start date of the project.
     */
    startDate?: string;
    /**
     * Subaccount ID of this project.
     */
    subaccountId?: string;
    /**
     * Number of clicks that the advertiser is targeting.
     */
    targetClicks?: string;
    /**
     * Number of conversions that the advertiser is targeting.
     */
    targetConversions?: string;
    /**
     * CPA that the advertiser is targeting.
     */
    targetCpaNanos?: string;
    /**
     * CPC that the advertiser is targeting.
     */
    targetCpcNanos?: string;
    /**
     * vCPM from Active View that the advertiser is targeting.
     */
    targetCpmActiveViewNanos?: string;
    /**
     * CPM that the advertiser is targeting.
     */
    targetCpmNanos?: string;
    /**
     * Number of impressions that the advertiser is targeting.
     */
    targetImpressions?: string;
  }
  /**
   * Project List Response
   */
  export interface Schema$ProjectsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#projectsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Project collection.
     */
    projects?: Schema$Project[];
  }
  /**
   * Represents fields that are compatible to be selected for a report of type &quot;REACH&quot;.
   */
  export interface Schema$ReachReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensionFilters&quot; section of the report.
     */
    dimensionFilters?: Schema$Dimension[];
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensions&quot; section of the report.
     */
    dimensions?: Schema$Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the &quot;metricNames&quot; section of the report.
     */
    metrics?: Schema$Metric[];
    /**
     * Metrics which are compatible to be selected as activity metrics to pivot on in the &quot;activities&quot; section of the report.
     */
    pivotedActivityMetrics?: Schema$Metric[];
    /**
     * Metrics which are compatible to be selected in the &quot;reachByFrequencyMetricNames&quot; section of the report.
     */
    reachByFrequencyMetrics?: Schema$Metric[];
  }
  /**
   * Represents a recipient.
   */
  export interface Schema$Recipient {
    /**
     * The delivery type for the recipient.
     */
    deliveryType?: string;
    /**
     * The email address of the recipient.
     */
    email?: string;
    /**
     * The kind of resource this is, in this case dfareporting#recipient.
     */
    kind?: string;
  }
  /**
   * Contains information about a region that can be targeted by ads.
   */
  export interface Schema$Region {
    /**
     * Country code of the country to which this region belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this region belongs.
     */
    countryDartId?: string;
    /**
     * DART ID of this region.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#region&quot;.
     */
    kind?: string;
    /**
     * Name of this region.
     */
    name?: string;
    /**
     * Region code.
     */
    regionCode?: string;
  }
  /**
   * Region List Response
   */
  export interface Schema$RegionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#regionsListResponse&quot;.
     */
    kind?: string;
    /**
     * Region collection.
     */
    regions?: Schema$Region[];
  }
  /**
   * Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
   */
  export interface Schema$RemarketingList {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;
    /**
     * Whether this remarketing list is active.
     */
    active?: boolean;
    /**
     * Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Remarketing list description.
     */
    description?: string;
    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#remarketingList&quot;.
     */
    kind?: string;
    /**
     * Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.
     */
    lifeSpan?: string;
    /**
     * Rule used to populate the remarketing list with users.
     */
    listPopulationRule?: Schema$ListPopulationRule;
    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;
    /**
     * Product from which this remarketing list was originated.
     */
    listSource?: string;
    /**
     * Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
     */
    name?: string;
    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
  }
  /**
   * Contains properties of a remarketing list&#39;s sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
   */
  export interface Schema$RemarketingListShare {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#remarketingListShare&quot;.
     */
    kind?: string;
    /**
     * Remarketing list ID. This is a read-only, auto-generated field.
     */
    remarketingListId?: string;
    /**
     * Accounts that the remarketing list is shared with.
     */
    sharedAccountIds?: string[];
    /**
     * Advertisers that the remarketing list is shared with.
     */
    sharedAdvertiserIds?: string[];
  }
  /**
   * Remarketing list response
   */
  export interface Schema$RemarketingListsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#remarketingListsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Remarketing list collection.
     */
    remarketingLists?: Schema$RemarketingList[];
  }
  /**
   * Represents a Report resource.
   */
  export interface Schema$Report {
    /**
     * The account ID to which this report belongs.
     */
    accountId?: string;
    /**
     * The report criteria for a report of type &quot;STANDARD&quot;.
     */
    criteria?: {
      activities?: Schema$Activities;
      customRichMediaEvents?: Schema$CustomRichMediaEvents;
      dateRange?: Schema$DateRange;
      dimensionFilters?: Schema$DimensionValue[];
      dimensions?: Schema$SortedDimension[];
      metricNames?: string[];
    };
    /**
     * The report criteria for a report of type &quot;CROSS_DIMENSION_REACH&quot;.
     */
    crossDimensionReachCriteria?: {
      breakdown?: Schema$SortedDimension[];
      dateRange?: Schema$DateRange;
      dimension?: string;
      dimensionFilters?: Schema$DimensionValue[];
      metricNames?: string[];
      overlapMetricNames?: string[];
      pivoted?: boolean;
    };
    /**
     * The report&#39;s email delivery settings.
     */
    delivery?: {
      emailOwner?: boolean;
      emailOwnerDeliveryType?: string;
      message?: string;
      recipients?: Schema$Recipient[];
    };
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The filename used when generating report files for this report.
     */
    fileName?: string;
    /**
     * The report criteria for a report of type &quot;FLOODLIGHT&quot;.
     */
    floodlightCriteria?: {
      customRichMediaEvents?: Schema$DimensionValue[];
      dateRange?: Schema$DateRange;
      dimensionFilters?: Schema$DimensionValue[];
      dimensions?: Schema$SortedDimension[];
      floodlightConfigId?: Schema$DimensionValue;
      metricNames?: string[];
      reportProperties?: {
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
      };
    };
    /**
     * The output format of the report. If not specified, default format is &quot;CSV&quot;. Note that the actual format in the completed report file might differ if for instance the report&#39;s size exceeds the format&#39;s capabilities. &quot;CSV&quot; will then be the fallback format.
     */
    format?: string;
    /**
     * The unique ID identifying this report resource.
     */
    id?: string;
    /**
     * The kind of resource this is, in this case dfareporting#report.
     */
    kind?: string;
    /**
     * The timestamp (in milliseconds since epoch) of when this report was last modified.
     */
    lastModifiedTime?: string;
    /**
     * The name of the report.
     */
    name?: string;
    /**
     * The user profile id of the owner of this report.
     */
    ownerProfileId?: string;
    /**
     * The report criteria for a report of type &quot;PATH_TO_CONVERSION&quot;.
     */
    pathToConversionCriteria?: {
      activityFilters?: Schema$DimensionValue[];
      conversionDimensions?: Schema$SortedDimension[];
      customFloodlightVariables?: Schema$SortedDimension[];
      customRichMediaEvents?: Schema$DimensionValue[];
      dateRange?: Schema$DateRange;
      floodlightConfigId?: Schema$DimensionValue;
      metricNames?: string[];
      perInteractionDimensions?: Schema$SortedDimension[];
      reportProperties?: {
        clicksLookbackWindow?: number;
        impressionsLookbackWindow?: number;
        includeAttributedIPConversions?: boolean;
        includeUnattributedCookieConversions?: boolean;
        includeUnattributedIPConversions?: boolean;
        maximumClickInteractions?: number;
        maximumImpressionInteractions?: number;
        maximumInteractionGap?: number;
        pivotOnInteractionPath?: boolean;
      };
    };
    /**
     * The report criteria for a report of type &quot;REACH&quot;.
     */
    reachCriteria?: {
      activities?: Schema$Activities;
      customRichMediaEvents?: Schema$CustomRichMediaEvents;
      dateRange?: Schema$DateRange;
      dimensionFilters?: Schema$DimensionValue[];
      dimensions?: Schema$SortedDimension[];
      enableAllDimensionCombinations?: boolean;
      metricNames?: string[];
      reachByFrequencyMetricNames?: string[];
    };
    /**
     * The report&#39;s schedule. Can only be set if the report&#39;s &#39;dateRange&#39; is a relative date range and the relative date range is not &quot;TODAY&quot;.
     */
    schedule?: {
      active?: boolean;
      every?: number;
      expirationDate?: string;
      repeats?: string;
      repeatsOnWeekDays?: string[];
      runsOnDayOfMonth?: string;
      startDate?: string;
    };
    /**
     * The subaccount ID to which this report belongs if applicable.
     */
    subAccountId?: string;
    /**
     * The type of the report.
     */
    type?: string;
  }
  /**
   * Represents fields that are compatible to be selected for a report of type &quot;STANDARD&quot;.
   */
  export interface Schema$ReportCompatibleFields {
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensionFilters&quot; section of the report.
     */
    dimensionFilters?: Schema$Dimension[];
    /**
     * Dimensions which are compatible to be selected in the &quot;dimensions&quot; section of the report.
     */
    dimensions?: Schema$Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#reportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the &quot;metricNames&quot; section of the report.
     */
    metrics?: Schema$Metric[];
    /**
     * Metrics which are compatible to be selected as activity metrics to pivot on in the &quot;activities&quot; section of the report.
     */
    pivotedActivityMetrics?: Schema$Metric[];
  }
  /**
   * Represents the list of reports.
   */
  export interface Schema$ReportList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The reports returned in this response.
     */
    items?: Schema$Report[];
    /**
     * The kind of list this is, in this case dfareporting#reportList.
     */
    kind?: string;
    /**
     * Continuation token used to page through reports. To retrieve the next page of results, set the next request&#39;s &quot;pageToken&quot; to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.
     */
    nextPageToken?: string;
  }
  /**
   * Reporting Configuration
   */
  export interface Schema$ReportsConfiguration {
    /**
     * Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
     */
    exposureToConversionEnabled?: boolean;
    /**
     * Default lookback windows for new advertisers in this account.
     */
    lookbackConfiguration?: Schema$LookbackConfiguration;
    /**
     * Report generation time zone ID of this account. This is a required field that can only be changed by a superuser. Acceptable values are:  - &quot;1&quot; for &quot;America/New_York&quot;  - &quot;2&quot; for &quot;Europe/London&quot;  - &quot;3&quot; for &quot;Europe/Paris&quot;  - &quot;4&quot; for &quot;Africa/Johannesburg&quot;  - &quot;5&quot; for &quot;Asia/Jerusalem&quot;  - &quot;6&quot; for &quot;Asia/Shanghai&quot;  - &quot;7&quot; for &quot;Asia/Hong_Kong&quot;  - &quot;8&quot; for &quot;Asia/Tokyo&quot;  - &quot;9&quot; for &quot;Australia/Sydney&quot;  - &quot;10&quot; for &quot;Asia/Dubai&quot;  - &quot;11&quot; for &quot;America/Los_Angeles&quot;  - &quot;12&quot; for &quot;Pacific/Auckland&quot;  - &quot;13&quot; for &quot;America/Sao_Paulo&quot;
     */
    reportGenerationTimeZoneId?: string;
  }
  /**
   * Rich Media Exit Override.
   */
  export interface Schema$RichMediaExitOverride {
    /**
     * Click-through URL of this rich media exit override. Applicable if the enabled field is set to true.
     */
    clickThroughUrl?: Schema$ClickThroughUrl;
    /**
     * Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
     */
    enabled?: boolean;
    /**
     * ID for the override to refer to a specific exit in the creative.
     */
    exitId?: string;
  }
  /**
   * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
   */
  export interface Schema$Rule {
    /**
     * A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
     */
    assetId?: string;
    /**
     * A user-friendly name for this rule. This is a required field.
     */
    name?: string;
    /**
     * A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field.
     */
    targetingTemplateId?: string;
  }
  /**
   * Contains properties of a site.
   */
  export interface Schema$Site {
    /**
     * Account ID of this site. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this site is approved.
     */
    approved?: boolean;
    /**
     * Directory site associated with this site. This is a required field that is read-only after insertion.
     */
    directorySiteId?: string;
    /**
     * Dimension value for the ID of the directory site. This is a read-only, auto-generated field.
     */
    directorySiteIdDimensionValue?: Schema$DimensionValue;
    /**
     * ID of this site. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Dimension value for the ID of this site. This is a read-only, auto-generated field.
     */
    idDimensionValue?: Schema$DimensionValue;
    /**
     * Key name of this site. This is a read-only, auto-generated field.
     */
    keyName?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#site&quot;.
     */
    kind?: string;
    /**
     * Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
     */
    name?: string;
    /**
     * Site contacts.
     */
    siteContacts?: Schema$SiteContact[];
    /**
     * Site-wide settings.
     */
    siteSettings?: Schema$SiteSettings;
    /**
     * Subaccount ID of this site. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }
  /**
   * Site Contact
   */
  export interface Schema$SiteContact {
    /**
     * Address of this site contact.
     */
    address?: string;
    /**
     * Site contact type.
     */
    contactType?: string;
    /**
     * Email address of this site contact. This is a required field.
     */
    email?: string;
    /**
     * First name of this site contact.
     */
    firstName?: string;
    /**
     * ID of this site contact. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Last name of this site contact.
     */
    lastName?: string;
    /**
     * Primary phone number of this site contact.
     */
    phone?: string;
    /**
     * Title or designation of this site contact.
     */
    title?: string;
  }
  /**
   * Site Settings
   */
  export interface Schema$SiteSettings {
    /**
     * Whether active view creatives are disabled for this site.
     */
    activeViewOptOut?: boolean;
    /**
     * Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect.
     */
    adBlockingOptOut?: boolean;
    /**
     * Site-wide creative settings.
     */
    creativeSettings?: Schema$CreativeSettings;
    /**
     * Whether new cookies are disabled for this site.
     */
    disableNewCookie?: boolean;
    /**
     * Lookback window settings for this site.
     */
    lookbackConfiguration?: Schema$LookbackConfiguration;
    /**
     * Configuration settings for dynamic and image floodlight tags.
     */
    tagSetting?: Schema$TagSetting;
    /**
     * Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.
     */
    videoActiveViewOptOutTemplate?: boolean;
    /**
     * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher&#39;s specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter).  Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
     */
    vpaidAdapterChoiceTemplate?: string;
  }
  /**
   * Site List Response
   */
  export interface Schema$SitesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#sitesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Site collection.
     */
    sites?: Schema$Site[];
  }
  /**
   * Represents the dimensions of ads, placements, creatives, or creative assets.
   */
  export interface Schema$Size {
    /**
     * Height of this size. Acceptable values are 0 to 32767, inclusive.
     */
    height?: number;
    /**
     * IAB standard size. This is a read-only, auto-generated field.
     */
    iab?: boolean;
    /**
     * ID of this size. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#size&quot;.
     */
    kind?: string;
    /**
     * Width of this size. Acceptable values are 0 to 32767, inclusive.
     */
    width?: number;
  }
  /**
   * Size List Response
   */
  export interface Schema$SizesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#sizesListResponse&quot;.
     */
    kind?: string;
    /**
     * Size collection.
     */
    sizes?: Schema$Size[];
  }
  /**
   * Skippable Settings
   */
  export interface Schema$SkippableSetting {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#skippableSetting&quot;.
     */
    kind?: string;
    /**
     * Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true.
     */
    progressOffset?: Schema$VideoOffset;
    /**
     * Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true.
     */
    skipOffset?: Schema$VideoOffset;
    /**
     * Whether the user can skip creatives served to this placement.
     */
    skippable?: boolean;
  }
  /**
   * Represents a sorted dimension.
   */
  export interface Schema$SortedDimension {
    /**
     * The kind of resource this is, in this case dfareporting#sortedDimension.
     */
    kind?: string;
    /**
     * The name of the dimension.
     */
    name?: string;
    /**
     * An optional sort order for the dimension column.
     */
    sortOrder?: string;
  }
  /**
   * Contains properties of a Campaign Manager subaccount.
   */
  export interface Schema$Subaccount {
    /**
     * ID of the account that contains this subaccount. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * IDs of the available user role permissions for this subaccount.
     */
    availablePermissionIds?: string[];
    /**
     * ID of this subaccount. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#subaccount&quot;.
     */
    kind?: string;
    /**
     * Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.
     */
    name?: string;
  }
  /**
   * Subaccount List Response
   */
  export interface Schema$SubaccountsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#subaccountsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Subaccount collection.
     */
    subaccounts?: Schema$Subaccount[];
  }
  /**
   * Placement Tag Data
   */
  export interface Schema$TagData {
    /**
     * Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
     */
    adId?: string;
    /**
     * Tag string to record a click.
     */
    clickTag?: string;
    /**
     * Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
     */
    creativeId?: string;
    /**
     * TagData tag format of this tag.
     */
    format?: string;
    /**
     * Tag string for serving an ad.
     */
    impressionTag?: string;
  }
  /**
   * Tag Settings
   */
  export interface Schema$TagSetting {
    /**
     * Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
     */
    additionalKeyValues?: string;
    /**
     * Whether static landing page URLs should be included in the tags. This setting applies only to placements.
     */
    includeClickThroughUrls?: boolean;
    /**
     * Whether click-tracking string should be included in the tags.
     */
    includeClickTracking?: boolean;
    /**
     * Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.
     */
    keywordOption?: string;
  }
  /**
   * Dynamic and Image Tag Settings.
   */
  export interface Schema$TagSettings {
    /**
     * Whether dynamic floodlight tags are enabled.
     */
    dynamicTagEnabled?: boolean;
    /**
     * Whether image tags are enabled.
     */
    imageTagEnabled?: boolean;
  }
  /**
   * Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
   */
  export interface Schema$TargetableRemarketingList {
    /**
     * Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    accountId?: string;
    /**
     * Whether this targetable remarketing list is active.
     */
    active?: boolean;
    /**
     * Dimension value for the advertiser ID that owns this targetable remarketing list.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Targetable remarketing list description.
     */
    description?: string;
    /**
     * Targetable remarketing list ID.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#targetableRemarketingList&quot;.
     */
    kind?: string;
    /**
     * Number of days that a user should remain in the targetable remarketing list without an impression.
     */
    lifeSpan?: string;
    /**
     * Number of users currently in the list. This is a read-only field.
     */
    listSize?: string;
    /**
     * Product from which this targetable remarketing list was originated.
     */
    listSource?: string;
    /**
     * Name of the targetable remarketing list. Is no greater than 128 characters long.
     */
    name?: string;
    /**
     * Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
     */
    subaccountId?: string;
  }
  /**
   * Targetable remarketing list response
   */
  export interface Schema$TargetableRemarketingListsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#targetableRemarketingListsListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Targetable remarketing list collection.
     */
    targetableRemarketingLists?: Schema$TargetableRemarketingList[];
  }
  /**
   * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
   */
  export interface Schema$TargetingTemplate {
    /**
     * Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    accountId?: string;
    /**
     * Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
     */
    advertiserId?: string;
    /**
     * Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.
     */
    advertiserIdDimensionValue?: Schema$DimensionValue;
    /**
     * Time and day targeting criteria.
     */
    dayPartTargeting?: Schema$DayPartTargeting;
    /**
     * Geographical targeting criteria.
     */
    geoTargeting?: Schema$GeoTargeting;
    /**
     * ID of this targeting template. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Key-value targeting criteria.
     */
    keyValueTargetingExpression?: Schema$KeyValueTargetingExpression;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#targetingTemplate&quot;.
     */
    kind?: string;
    /**
     * Language targeting criteria.
     */
    languageTargeting?: Schema$LanguageTargeting;
    /**
     * Remarketing list targeting criteria.
     */
    listTargetingExpression?: Schema$ListTargetingExpression;
    /**
     * Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.
     */
    name?: string;
    /**
     * Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
     */
    subaccountId?: string;
    /**
     * Technology platform targeting criteria.
     */
    technologyTargeting?: Schema$TechnologyTargeting;
  }
  /**
   * Targeting Template List Response
   */
  export interface Schema$TargetingTemplatesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#targetingTemplatesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * Targeting template collection.
     */
    targetingTemplates?: Schema$TargetingTemplate[];
  }
  /**
   * Target Window.
   */
  export interface Schema$TargetWindow {
    /**
     * User-entered value.
     */
    customHtml?: string;
    /**
     * Type of browser window for which the backup image of the flash creative can be displayed.
     */
    targetWindowOption?: string;
  }
  /**
   * Technology Targeting.
   */
  export interface Schema$TechnologyTargeting {
    /**
     * Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.
     */
    browsers?: Schema$Browser[];
    /**
     * Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated.
     */
    connectionTypes?: Schema$ConnectionType[];
    /**
     * Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
     */
    mobileCarriers?: Schema$MobileCarrier[];
    /**
     * Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.
     */
    operatingSystems?: Schema$OperatingSystem[];
    /**
     * Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
     */
    operatingSystemVersions?: Schema$OperatingSystemVersion[];
    /**
     * Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.
     */
    platformTypes?: Schema$PlatformType[];
  }
  /**
   * Third Party Authentication Token
   */
  export interface Schema$ThirdPartyAuthenticationToken {
    /**
     * Name of the third-party authentication token.
     */
    name?: string;
    /**
     * Value of the third-party authentication token. This is a read-only, auto-generated field.
     */
    value?: string;
  }
  /**
   * Third-party Tracking URL.
   */
  export interface Schema$ThirdPartyTrackingUrl {
    /**
     * Third-party URL type for in-stream video and in-stream audio creatives.
     */
    thirdPartyUrlType?: string;
    /**
     * URL for the specified third-party URL type.
     */
    url?: string;
  }
  /**
   * Transcode Settings
   */
  export interface Schema$TranscodeSetting {
    /**
     * Whitelist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
     */
    enabledVideoFormats?: number[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#transcodeSetting&quot;.
     */
    kind?: string;
  }
  /**
   * A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
   */
  export interface Schema$UniversalAdId {
    /**
     * Registry used for the Ad ID value.
     */
    registry?: string;
    /**
     * ID value for this creative. Only alphanumeric characters and the following symbols are valid: &quot;_/\-&quot;. Maximum length is 64 characters. Read only when registry is DCM.
     */
    value?: string;
  }
  /**
   * User Defined Variable configuration.
   */
  export interface Schema$UserDefinedVariableConfiguration {
    /**
     * Data type for the variable. This is a required field.
     */
    dataType?: string;
    /**
     * User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: &quot;&quot;&lt;&gt;&quot;.
     */
    reportName?: string;
    /**
     * Variable name in the tag. This is a required field.
     */
    variableType?: string;
  }
  /**
   * Represents a UserProfile resource.
   */
  export interface Schema$UserProfile {
    /**
     * The account ID to which this profile belongs.
     */
    accountId?: string;
    /**
     * The account name this profile belongs to.
     */
    accountName?: string;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The kind of resource this is, in this case dfareporting#userProfile.
     */
    kind?: string;
    /**
     * The unique ID of the user profile.
     */
    profileId?: string;
    /**
     * The sub account ID this profile belongs to if applicable.
     */
    subAccountId?: string;
    /**
     * The sub account name this profile belongs to if applicable.
     */
    subAccountName?: string;
    /**
     * The user name.
     */
    userName?: string;
  }
  /**
   * Represents the list of user profiles.
   */
  export interface Schema$UserProfileList {
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The user profiles returned in this response.
     */
    items?: Schema$UserProfile[];
    /**
     * The kind of list this is, in this case dfareporting#userProfileList.
     */
    kind?: string;
  }
  /**
   * Contains properties of auser role, which is used to manage user access.
   */
  export interface Schema$UserRole {
    /**
     * Account ID of this user role. This is a read-only field that can be left blank.
     */
    accountId?: string;
    /**
     * Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
     */
    defaultUserRole?: boolean;
    /**
     * ID of this user role. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRole&quot;.
     */
    kind?: string;
    /**
     * Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.
     */
    name?: string;
    /**
     * ID of the user role that this user role is based on or copied from. This is a required field.
     */
    parentUserRoleId?: string;
    /**
     * List of permissions associated with this user role.
     */
    permissions?: Schema$UserRolePermission[];
    /**
     * Subaccount ID of this user role. This is a read-only field that can be left blank.
     */
    subaccountId?: string;
  }
  /**
   * Contains properties of a user role permission.
   */
  export interface Schema$UserRolePermission {
    /**
     * Levels of availability for a user role permission.
     */
    availability?: string;
    /**
     * ID of this user role permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRolePermission&quot;.
     */
    kind?: string;
    /**
     * Name of this user role permission.
     */
    name?: string;
    /**
     * ID of the permission group that this user role permission belongs to.
     */
    permissionGroupId?: string;
  }
  /**
   * Represents a grouping of related user role permissions.
   */
  export interface Schema$UserRolePermissionGroup {
    /**
     * ID of this user role permission.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRolePermissionGroup&quot;.
     */
    kind?: string;
    /**
     * Name of this user role permission group.
     */
    name?: string;
  }
  /**
   * User Role Permission Group List Response
   */
  export interface Schema$UserRolePermissionGroupsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRolePermissionGroupsListResponse&quot;.
     */
    kind?: string;
    /**
     * User role permission group collection.
     */
    userRolePermissionGroups?: Schema$UserRolePermissionGroup[];
  }
  /**
   * User Role Permission List Response
   */
  export interface Schema$UserRolePermissionsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRolePermissionsListResponse&quot;.
     */
    kind?: string;
    /**
     * User role permission collection.
     */
    userRolePermissions?: Schema$UserRolePermission[];
  }
  /**
   * User Role List Response
   */
  export interface Schema$UserRolesListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#userRolesListResponse&quot;.
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
    /**
     * User role collection.
     */
    userRoles?: Schema$UserRole[];
  }
  /**
   * Contains information about supported video formats.
   */
  export interface Schema$VideoFormat {
    /**
     * File type of the video format.
     */
    fileType?: string;
    /**
     * ID of the video format.
     */
    id?: number;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#videoFormat&quot;.
     */
    kind?: string;
    /**
     * The resolution of this video format.
     */
    resolution?: Schema$Size;
    /**
     * The target bit rate of this video format.
     */
    targetBitRate?: number;
  }
  /**
   * Video Format List Response
   */
  export interface Schema$VideoFormatsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#videoFormatsListResponse&quot;.
     */
    kind?: string;
    /**
     * Video format collection.
     */
    videoFormats?: Schema$VideoFormat[];
  }
  /**
   * Video Offset
   */
  export interface Schema$VideoOffset {
    /**
     * Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.
     */
    offsetPercentage?: number;
    /**
     * Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.
     */
    offsetSeconds?: number;
  }
  /**
   * Video Settings
   */
  export interface Schema$VideoSettings {
    /**
     * Settings for the companion creatives of video creatives served to this placement.
     */
    companionSettings?: Schema$CompanionSetting;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;dfareporting#videoSettings&quot;.
     */
    kind?: string;
    /**
     * Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
     */
    orientation?: string;
    /**
     * Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be overridden.
     */
    skippableSettings?: Schema$SkippableSetting;
    /**
     * Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be overridden.
     */
    transcodeSettings?: Schema$TranscodeSetting;
  }

  export class Resource$Accountactiveadsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.accountActiveAdSummaries.get
     * @desc Gets the account's active ad summary by account ID.
     * @alias dfareporting.accountActiveAdSummaries.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.summaryAccountId Account ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accountactiveadsummaries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountActiveAdSummary>;
    get(
      params: Params$Resource$Accountactiveadsummaries$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountActiveAdSummary>,
      callback: BodyResponseCallback<Schema$AccountActiveAdSummary>
    ): void;
    get(
      params: Params$Resource$Accountactiveadsummaries$Get,
      callback: BodyResponseCallback<Schema$AccountActiveAdSummary>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountActiveAdSummary>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountactiveadsummaries$Get
        | BodyResponseCallback<Schema$AccountActiveAdSummary>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountActiveAdSummary>,
      callback?: BodyResponseCallback<Schema$AccountActiveAdSummary>
    ): void | GaxiosPromise<Schema$AccountActiveAdSummary> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountactiveadsummaries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountactiveadsummaries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'summaryAccountId'],
        pathParams: ['profileId', 'summaryAccountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountActiveAdSummary>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountActiveAdSummary>(parameters);
      }
    }
  }

  export interface Params$Resource$Accountactiveadsummaries$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Account ID.
     */
    summaryAccountId?: string;
  }

  export class Resource$Accountpermissiongroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.accountPermissionGroups.get
     * @desc Gets one account permission group by ID.
     * @alias dfareporting.accountPermissionGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account permission group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accountpermissiongroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountPermissionGroup>;
    get(
      params: Params$Resource$Accountpermissiongroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionGroup>,
      callback: BodyResponseCallback<Schema$AccountPermissionGroup>
    ): void;
    get(
      params: Params$Resource$Accountpermissiongroups$Get,
      callback: BodyResponseCallback<Schema$AccountPermissionGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountPermissionGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountpermissiongroups$Get
        | BodyResponseCallback<Schema$AccountPermissionGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionGroup>,
      callback?: BodyResponseCallback<Schema$AccountPermissionGroup>
    ): void | GaxiosPromise<Schema$AccountPermissionGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountpermissiongroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountpermissiongroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountPermissionGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountPermissionGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountPermissionGroup>(parameters);
      }
    }

    /**
     * dfareporting.accountPermissionGroups.list
     * @desc Retrieves the list of account permission groups.
     * @alias dfareporting.accountPermissionGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accountpermissiongroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountPermissionGroupsListResponse>;
    list(
      params: Params$Resource$Accountpermissiongroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>,
      callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>
    ): void;
    list(
      params: Params$Resource$Accountpermissiongroups$List,
      callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountpermissiongroups$List
        | BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionGroupsListResponse>,
      callback?: BodyResponseCallback<
        Schema$AccountPermissionGroupsListResponse
      >
    ): void | GaxiosPromise<Schema$AccountPermissionGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountpermissiongroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountpermissiongroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountPermissionGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountPermissionGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AccountPermissionGroupsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accountpermissiongroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account permission group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Accountpermissiongroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Accountpermissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.accountPermissions.get
     * @desc Gets one account permission by ID.
     * @alias dfareporting.accountPermissions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account permission ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accountpermissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountPermission>;
    get(
      params: Params$Resource$Accountpermissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountPermission>,
      callback: BodyResponseCallback<Schema$AccountPermission>
    ): void;
    get(
      params: Params$Resource$Accountpermissions$Get,
      callback: BodyResponseCallback<Schema$AccountPermission>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountPermission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountpermissions$Get
        | BodyResponseCallback<Schema$AccountPermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermission>,
      callback?: BodyResponseCallback<Schema$AccountPermission>
    ): void | GaxiosPromise<Schema$AccountPermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountpermissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountpermissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountPermissions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountPermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountPermission>(parameters);
      }
    }

    /**
     * dfareporting.accountPermissions.list
     * @desc Retrieves the list of account permissions.
     * @alias dfareporting.accountPermissions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accountpermissions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountPermissionsListResponse>;
    list(
      params: Params$Resource$Accountpermissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionsListResponse>,
      callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>
    ): void;
    list(
      params: Params$Resource$Accountpermissions$List,
      callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AccountPermissionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountpermissions$List
        | BodyResponseCallback<Schema$AccountPermissionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountPermissionsListResponse>,
      callback?: BodyResponseCallback<Schema$AccountPermissionsListResponse>
    ): void | GaxiosPromise<Schema$AccountPermissionsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountpermissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountpermissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountPermissionsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AccountPermissionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accountpermissions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account permission ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Accountpermissions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.accounts.get
     * @desc Gets one account by ID.
     * @alias dfareporting.accounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accounts/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * dfareporting.accounts.list
     * @desc Retrieves the list of accounts, possibly filtered. This method supports paging.
     * @alias dfareporting.accounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active accounts. Don't set this field to select both active and non-active accounts.
     * @param {string=} params.ids Select only accounts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountsListResponse>;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$AccountsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$AccountsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountsListResponse>,
      callback?: BodyResponseCallback<Schema$AccountsListResponse>
    ): void | GaxiosPromise<Schema$AccountsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.accounts.patch
     * @desc Updates an existing account. This method supports patch semantics.
     * @alias dfareporting.accounts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Account ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Account} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * dfareporting.accounts.update
     * @desc Updates an existing account.
     * @alias dfareporting.accounts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Account} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
    update(
      params: Params$Resource$Accounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(
      params: Params$Resource$Accounts$Update,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    update(callback: BodyResponseCallback<Schema$Account>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accounts$Update
        | BodyResponseCallback<Schema$Account>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback?: BodyResponseCallback<Schema$Account>
    ): void | GaxiosPromise<Schema$Account> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/accounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Account>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active accounts. Don't set this field to select both active and non-active accounts.
     */
    active?: boolean;
    /**
     * Select only accounts with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Account ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }
  export interface Params$Resource$Accounts$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Accountuserprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.accountUserProfiles.get
     * @desc Gets one account user profile by ID.
     * @alias dfareporting.accountUserProfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User profile ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Accountuserprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountUserProfile>;
    get(
      params: Params$Resource$Accountuserprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    get(
      params: Params$Resource$Accountuserprofiles$Get,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accountuserprofiles$Get
        | BodyResponseCallback<Schema$AccountUserProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfile>,
      callback?: BodyResponseCallback<Schema$AccountUserProfile>
    ): void | GaxiosPromise<Schema$AccountUserProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountuserprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountuserprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountUserProfiles/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountUserProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountUserProfile>(parameters);
      }
    }

    /**
     * dfareporting.accountUserProfiles.insert
     * @desc Inserts a new account user profile.
     * @alias dfareporting.accountUserProfiles.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AccountUserProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Accountuserprofiles$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountUserProfile>;
    insert(
      params: Params$Resource$Accountuserprofiles$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    insert(
      params: Params$Resource$Accountuserprofiles$Insert,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accountuserprofiles$Insert
        | BodyResponseCallback<Schema$AccountUserProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfile>,
      callback?: BodyResponseCallback<Schema$AccountUserProfile>
    ): void | GaxiosPromise<Schema$AccountUserProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountuserprofiles$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountuserprofiles$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountUserProfiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountUserProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountUserProfile>(parameters);
      }
    }

    /**
     * dfareporting.accountUserProfiles.list
     * @desc Retrieves a list of account user profiles, possibly filtered. This method supports paging.
     * @alias dfareporting.accountUserProfiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active user profiles.
     * @param {string=} params.ids Select only user profiles with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.subaccountId Select only user profiles with the specified subaccount ID.
     * @param {string=} params.userRoleId Select only user profiles with the specified user role ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Accountuserprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountUserProfilesListResponse>;
    list(
      params: Params$Resource$Accountuserprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfilesListResponse>,
      callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>
    ): void;
    list(
      params: Params$Resource$Accountuserprofiles$List,
      callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AccountUserProfilesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accountuserprofiles$List
        | BodyResponseCallback<Schema$AccountUserProfilesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfilesListResponse>,
      callback?: BodyResponseCallback<Schema$AccountUserProfilesListResponse>
    ): void | GaxiosPromise<Schema$AccountUserProfilesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountuserprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountuserprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountUserProfiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountUserProfilesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AccountUserProfilesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.accountUserProfiles.patch
     * @desc Updates an existing account user profile. This method supports patch semantics.
     * @alias dfareporting.accountUserProfiles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User profile ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AccountUserProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Accountuserprofiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountUserProfile>;
    patch(
      params: Params$Resource$Accountuserprofiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    patch(
      params: Params$Resource$Accountuserprofiles$Patch,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accountuserprofiles$Patch
        | BodyResponseCallback<Schema$AccountUserProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfile>,
      callback?: BodyResponseCallback<Schema$AccountUserProfile>
    ): void | GaxiosPromise<Schema$AccountUserProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountuserprofiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountuserprofiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountUserProfiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountUserProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountUserProfile>(parameters);
      }
    }

    /**
     * dfareporting.accountUserProfiles.update
     * @desc Updates an existing account user profile.
     * @alias dfareporting.accountUserProfiles.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AccountUserProfile} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Accountuserprofiles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountUserProfile>;
    update(
      params: Params$Resource$Accountuserprofiles$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AccountUserProfile>,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    update(
      params: Params$Resource$Accountuserprofiles$Update,
      callback: BodyResponseCallback<Schema$AccountUserProfile>
    ): void;
    update(callback: BodyResponseCallback<Schema$AccountUserProfile>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Accountuserprofiles$Update
        | BodyResponseCallback<Schema$AccountUserProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AccountUserProfile>,
      callback?: BodyResponseCallback<Schema$AccountUserProfile>
    ): void | GaxiosPromise<Schema$AccountUserProfile> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accountuserprofiles$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accountuserprofiles$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/accountUserProfiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AccountUserProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AccountUserProfile>(parameters);
      }
    }
  }

  export interface Params$Resource$Accountuserprofiles$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Accountuserprofiles$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountUserProfile;
  }
  export interface Params$Resource$Accountuserprofiles$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active user profiles.
     */
    active?: boolean;
    /**
     * Select only user profiles with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only user profiles with the specified subaccount ID.
     */
    subaccountId?: string;
    /**
     * Select only user profiles with the specified user role ID.
     */
    userRoleId?: string;
  }
  export interface Params$Resource$Accountuserprofiles$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountUserProfile;
  }
  export interface Params$Resource$Accountuserprofiles$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountUserProfile;
  }

  export class Resource$Ads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.ads.get
     * @desc Gets one ad by ID.
     * @alias dfareporting.ads.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Ad ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Ads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Ad>;
    get(
      params: Params$Resource$Ads$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    get(
      params: Params$Resource$Ads$Get,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    get(callback: BodyResponseCallback<Schema$Ad>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Ads$Get
        | BodyResponseCallback<Schema$Ad>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback?: BodyResponseCallback<Schema$Ad>
    ): void | GaxiosPromise<Schema$Ad> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/ads/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Ad>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Ad>(parameters);
      }
    }

    /**
     * dfareporting.ads.insert
     * @desc Inserts a new ad.
     * @alias dfareporting.ads.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Ad} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Ads$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Ad>;
    insert(
      params: Params$Resource$Ads$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    insert(
      params: Params$Resource$Ads$Insert,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Ad>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Ads$Insert
        | BodyResponseCallback<Schema$Ad>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback?: BodyResponseCallback<Schema$Ad>
    ): void | GaxiosPromise<Schema$Ad> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ads$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ads$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/ads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Ad>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Ad>(parameters);
      }
    }

    /**
     * dfareporting.ads.list
     * @desc Retrieves a list of ads, possibly filtered. This method supports paging.
     * @alias dfareporting.ads.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active ads.
     * @param {string=} params.advertiserId Select only ads with this advertiser ID.
     * @param {boolean=} params.archived Select only archived ads.
     * @param {string=} params.audienceSegmentIds Select only ads with these audience segment IDs.
     * @param {string=} params.campaignIds Select only ads with these campaign IDs.
     * @param {string=} params.compatibility Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     * @param {string=} params.creativeIds Select only ads with these creative IDs assigned.
     * @param {string=} params.creativeOptimizationConfigurationIds Select only ads with these creative optimization configuration IDs.
     * @param {boolean=} params.dynamicClickTracker Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     * @param {string=} params.ids Select only ads with these IDs.
     * @param {string=} params.landingPageIds Select only ads with these landing page IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.overriddenEventTagId Select only ads with this event tag override ID.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.placementIds Select only ads with these placement IDs assigned.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.remarketingListIds Select only ads whose list targeting expression use these remarketing list IDs.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     * @param {string=} params.sizeIds Select only ads with these size IDs.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {boolean=} params.sslCompliant Select only ads that are SSL-compliant.
     * @param {boolean=} params.sslRequired Select only ads that require SSL.
     * @param {string=} params.type Select only ads with these types.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Ads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdsListResponse>;
    list(
      params: Params$Resource$Ads$List,
      options: MethodOptions | BodyResponseCallback<Schema$AdsListResponse>,
      callback: BodyResponseCallback<Schema$AdsListResponse>
    ): void;
    list(
      params: Params$Resource$Ads$List,
      callback: BodyResponseCallback<Schema$AdsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Ads$List
        | BodyResponseCallback<Schema$AdsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdsListResponse>,
      callback?: BodyResponseCallback<Schema$AdsListResponse>
    ): void | GaxiosPromise<Schema$AdsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/ads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.ads.patch
     * @desc Updates an existing ad. This method supports patch semantics.
     * @alias dfareporting.ads.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Ad ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Ad} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Ads$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Ad>;
    patch(
      params: Params$Resource$Ads$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    patch(
      params: Params$Resource$Ads$Patch,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Ad>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Ads$Patch
        | BodyResponseCallback<Schema$Ad>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback?: BodyResponseCallback<Schema$Ad>
    ): void | GaxiosPromise<Schema$Ad> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ads$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ads$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/ads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Ad>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Ad>(parameters);
      }
    }

    /**
     * dfareporting.ads.update
     * @desc Updates an existing ad.
     * @alias dfareporting.ads.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Ad} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Ads$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Ad>;
    update(
      params: Params$Resource$Ads$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    update(
      params: Params$Resource$Ads$Update,
      callback: BodyResponseCallback<Schema$Ad>
    ): void;
    update(callback: BodyResponseCallback<Schema$Ad>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Ads$Update
        | BodyResponseCallback<Schema$Ad>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Ad>,
      callback?: BodyResponseCallback<Schema$Ad>
    ): void | GaxiosPromise<Schema$Ad> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ads$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ads$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/ads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Ad>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Ad>(parameters);
      }
    }
  }

  export interface Params$Resource$Ads$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Ads$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Ad;
  }
  export interface Params$Resource$Ads$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active ads.
     */
    active?: boolean;
    /**
     * Select only ads with this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Select only archived ads.
     */
    archived?: boolean;
    /**
     * Select only ads with these audience segment IDs.
     */
    audienceSegmentIds?: string[];
    /**
     * Select only ads with these campaign IDs.
     */
    campaignIds?: string[];
    /**
     * Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
     */
    compatibility?: string;
    /**
     * Select only ads with these creative IDs assigned.
     */
    creativeIds?: string[];
    /**
     * Select only ads with these creative optimization configuration IDs.
     */
    creativeOptimizationConfigurationIds?: string[];
    /**
     * Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
     */
    dynamicClickTracker?: boolean;
    /**
     * Select only ads with these IDs.
     */
    ids?: string[];
    /**
     * Select only ads with these landing page IDs.
     */
    landingPageIds?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only ads with this event tag override ID.
     */
    overriddenEventTagId?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only ads with these placement IDs assigned.
     */
    placementIds?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Select only ads whose list targeting expression use these remarketing list IDs.
     */
    remarketingListIds?: string[];
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
     */
    searchString?: string;
    /**
     * Select only ads with these size IDs.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only ads that are SSL-compliant.
     */
    sslCompliant?: boolean;
    /**
     * Select only ads that require SSL.
     */
    sslRequired?: boolean;
    /**
     * Select only ads with these types.
     */
    type?: string[];
  }
  export interface Params$Resource$Ads$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Ad ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Ad;
  }
  export interface Params$Resource$Ads$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Ad;
  }

  export class Resource$Advertisergroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.advertiserGroups.delete
     * @desc Deletes an existing advertiser group.
     * @alias dfareporting.advertiserGroups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Advertisergroups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Advertisergroups$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Advertisergroups$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.advertiserGroups.get
     * @desc Gets one advertiser group by ID.
     * @alias dfareporting.advertiserGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Advertisergroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserGroup>;
    get(
      params: Params$Resource$Advertisergroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    get(
      params: Params$Resource$Advertisergroups$Get,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$Get
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback?: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void | GaxiosPromise<Schema$AdvertiserGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdvertiserGroup>(parameters);
      }
    }

    /**
     * dfareporting.advertiserGroups.insert
     * @desc Inserts a new advertiser group.
     * @alias dfareporting.advertiserGroups.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AdvertiserGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Advertisergroups$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserGroup>;
    insert(
      params: Params$Resource$Advertisergroups$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    insert(
      params: Params$Resource$Advertisergroups$Insert,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    insert(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$Insert
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback?: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void | GaxiosPromise<Schema$AdvertiserGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdvertiserGroup>(parameters);
      }
    }

    /**
     * dfareporting.advertiserGroups.list
     * @desc Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
     * @alias dfareporting.advertiserGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only advertiser groups with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Advertisergroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserGroupsListResponse>;
    list(
      params: Params$Resource$Advertisergroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroupsListResponse>,
      callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>
    ): void;
    list(
      params: Params$Resource$Advertisergroups$List,
      callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$List
        | BodyResponseCallback<Schema$AdvertiserGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroupsListResponse>,
      callback?: BodyResponseCallback<Schema$AdvertiserGroupsListResponse>
    ): void | GaxiosPromise<Schema$AdvertiserGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AdvertiserGroupsListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.advertiserGroups.patch
     * @desc Updates an existing advertiser group. This method supports patch semantics.
     * @alias dfareporting.advertiserGroups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AdvertiserGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Advertisergroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserGroup>;
    patch(
      params: Params$Resource$Advertisergroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    patch(
      params: Params$Resource$Advertisergroups$Patch,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$Patch
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback?: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void | GaxiosPromise<Schema$AdvertiserGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdvertiserGroup>(parameters);
      }
    }

    /**
     * dfareporting.advertiserGroups.update
     * @desc Updates an existing advertiser group.
     * @alias dfareporting.advertiserGroups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().AdvertiserGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Advertisergroups$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserGroup>;
    update(
      params: Params$Resource$Advertisergroups$Update,
      options: MethodOptions | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    update(
      params: Params$Resource$Advertisergroups$Update,
      callback: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void;
    update(callback: BodyResponseCallback<Schema$AdvertiserGroup>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Advertisergroups$Update
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserGroup>,
      callback?: BodyResponseCallback<Schema$AdvertiserGroup>
    ): void | GaxiosPromise<Schema$AdvertiserGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisergroups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisergroups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdvertiserGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Advertisergroups$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Advertisergroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Advertisergroups$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdvertiserGroup;
  }
  export interface Params$Resource$Advertisergroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only advertiser groups with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Advertisergroups$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdvertiserGroup;
  }
  export interface Params$Resource$Advertisergroups$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AdvertiserGroup;
  }

  export class Resource$Advertiserlandingpages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.advertiserLandingPages.get
     * @desc Gets one landing page by ID.
     * @alias dfareporting.advertiserLandingPages.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Landing page ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Advertiserlandingpages$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LandingPage>;
    get(
      params: Params$Resource$Advertiserlandingpages$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LandingPage>,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    get(
      params: Params$Resource$Advertiserlandingpages$Get,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    get(callback: BodyResponseCallback<Schema$LandingPage>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Advertiserlandingpages$Get
        | BodyResponseCallback<Schema$LandingPage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LandingPage>,
      callback?: BodyResponseCallback<Schema$LandingPage>
    ): void | GaxiosPromise<Schema$LandingPage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertiserlandingpages$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertiserlandingpages$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserLandingPages/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LandingPage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LandingPage>(parameters);
      }
    }

    /**
     * dfareporting.advertiserLandingPages.insert
     * @desc Inserts a new landing page.
     * @alias dfareporting.advertiserLandingPages.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().LandingPage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Advertiserlandingpages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LandingPage>;
    insert(
      params: Params$Resource$Advertiserlandingpages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LandingPage>,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    insert(
      params: Params$Resource$Advertiserlandingpages$Insert,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LandingPage>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Advertiserlandingpages$Insert
        | BodyResponseCallback<Schema$LandingPage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LandingPage>,
      callback?: BodyResponseCallback<Schema$LandingPage>
    ): void | GaxiosPromise<Schema$LandingPage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertiserlandingpages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertiserlandingpages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserLandingPages'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LandingPage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LandingPage>(parameters);
      }
    }

    /**
     * dfareporting.advertiserLandingPages.list
     * @desc Retrieves a list of landing pages.
     * @alias dfareporting.advertiserLandingPages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only landing pages that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
     * @param {string=} params.campaignIds Select only landing pages that are associated with these campaigns.
     * @param {string=} params.ids Select only landing pages with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.subaccountId Select only landing pages that belong to this subaccount.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Advertiserlandingpages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertiserLandingPagesListResponse>;
    list(
      params: Params$Resource$Advertiserlandingpages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>,
      callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>
    ): void;
    list(
      params: Params$Resource$Advertiserlandingpages$List,
      callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Advertiserlandingpages$List
        | BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>,
      callback?: BodyResponseCallback<Schema$AdvertiserLandingPagesListResponse>
    ): void | GaxiosPromise<Schema$AdvertiserLandingPagesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertiserlandingpages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertiserlandingpages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserLandingPages'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertiserLandingPagesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$AdvertiserLandingPagesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.advertiserLandingPages.patch
     * @desc Updates an existing landing page. This method supports patch semantics.
     * @alias dfareporting.advertiserLandingPages.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Landing page ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().LandingPage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Advertiserlandingpages$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LandingPage>;
    patch(
      params: Params$Resource$Advertiserlandingpages$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LandingPage>,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    patch(
      params: Params$Resource$Advertiserlandingpages$Patch,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LandingPage>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Advertiserlandingpages$Patch
        | BodyResponseCallback<Schema$LandingPage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LandingPage>,
      callback?: BodyResponseCallback<Schema$LandingPage>
    ): void | GaxiosPromise<Schema$LandingPage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertiserlandingpages$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertiserlandingpages$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserLandingPages'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LandingPage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LandingPage>(parameters);
      }
    }

    /**
     * dfareporting.advertiserLandingPages.update
     * @desc Updates an existing landing page.
     * @alias dfareporting.advertiserLandingPages.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().LandingPage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Advertiserlandingpages$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LandingPage>;
    update(
      params: Params$Resource$Advertiserlandingpages$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LandingPage>,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    update(
      params: Params$Resource$Advertiserlandingpages$Update,
      callback: BodyResponseCallback<Schema$LandingPage>
    ): void;
    update(callback: BodyResponseCallback<Schema$LandingPage>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Advertiserlandingpages$Update
        | BodyResponseCallback<Schema$LandingPage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LandingPage>,
      callback?: BodyResponseCallback<Schema$LandingPage>
    ): void | GaxiosPromise<Schema$LandingPage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertiserlandingpages$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertiserlandingpages$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertiserLandingPages'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LandingPage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LandingPage>(parameters);
      }
    }
  }

  export interface Params$Resource$Advertiserlandingpages$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Landing page ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Advertiserlandingpages$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LandingPage;
  }
  export interface Params$Resource$Advertiserlandingpages$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only landing pages that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
     */
    archived?: boolean;
    /**
     * Select only landing pages that are associated with these campaigns.
     */
    campaignIds?: string[];
    /**
     * Select only landing pages with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only landing pages that belong to this subaccount.
     */
    subaccountId?: string;
  }
  export interface Params$Resource$Advertiserlandingpages$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Landing page ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LandingPage;
  }
  export interface Params$Resource$Advertiserlandingpages$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LandingPage;
  }

  export class Resource$Advertisers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.advertisers.get
     * @desc Gets one advertiser by ID.
     * @alias dfareporting.advertisers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Advertisers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Advertiser>;
    get(
      params: Params$Resource$Advertisers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Advertiser>,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    get(
      params: Params$Resource$Advertisers$Get,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    get(callback: BodyResponseCallback<Schema$Advertiser>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Advertisers$Get
        | BodyResponseCallback<Schema$Advertiser>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Advertiser>,
      callback?: BodyResponseCallback<Schema$Advertiser>
    ): void | GaxiosPromise<Schema$Advertiser> {
      let params = (paramsOrCallback || {}) as Params$Resource$Advertisers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertisers/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Advertiser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Advertiser>(parameters);
      }
    }

    /**
     * dfareporting.advertisers.insert
     * @desc Inserts a new advertiser.
     * @alias dfareporting.advertisers.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Advertiser} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Advertisers$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Advertiser>;
    insert(
      params: Params$Resource$Advertisers$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Advertiser>,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    insert(
      params: Params$Resource$Advertisers$Insert,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Advertiser>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Advertisers$Insert
        | BodyResponseCallback<Schema$Advertiser>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Advertiser>,
      callback?: BodyResponseCallback<Schema$Advertiser>
    ): void | GaxiosPromise<Schema$Advertiser> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisers$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisers$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertisers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Advertiser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Advertiser>(parameters);
      }
    }

    /**
     * dfareporting.advertisers.list
     * @desc Retrieves a list of advertisers, possibly filtered. This method supports paging.
     * @alias dfareporting.advertisers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserGroupIds Select only advertisers with these advertiser group IDs.
     * @param {string=} params.floodlightConfigurationIds Select only advertisers with these floodlight configuration IDs.
     * @param {string=} params.ids Select only advertisers with these IDs.
     * @param {boolean=} params.includeAdvertisersWithoutGroupsOnly Select only advertisers which do not belong to any advertiser group.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {boolean=} params.onlyParent Select only advertisers which use another advertiser's floodlight configuration.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.status Select only advertisers with the specified status.
     * @param {string=} params.subaccountId Select only advertisers with these subaccount IDs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Advertisers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AdvertisersListResponse>;
    list(
      params: Params$Resource$Advertisers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertisersListResponse>,
      callback: BodyResponseCallback<Schema$AdvertisersListResponse>
    ): void;
    list(
      params: Params$Resource$Advertisers$List,
      callback: BodyResponseCallback<Schema$AdvertisersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$AdvertisersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Advertisers$List
        | BodyResponseCallback<Schema$AdvertisersListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AdvertisersListResponse>,
      callback?: BodyResponseCallback<Schema$AdvertisersListResponse>
    ): void | GaxiosPromise<Schema$AdvertisersListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Advertisers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertisers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AdvertisersListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AdvertisersListResponse>(parameters);
      }
    }

    /**
     * dfareporting.advertisers.patch
     * @desc Updates an existing advertiser. This method supports patch semantics.
     * @alias dfareporting.advertisers.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Advertiser ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Advertiser} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Advertisers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Advertiser>;
    patch(
      params: Params$Resource$Advertisers$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Advertiser>,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    patch(
      params: Params$Resource$Advertisers$Patch,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Advertiser>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Advertisers$Patch
        | BodyResponseCallback<Schema$Advertiser>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Advertiser>,
      callback?: BodyResponseCallback<Schema$Advertiser>
    ): void | GaxiosPromise<Schema$Advertiser> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertisers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Advertiser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Advertiser>(parameters);
      }
    }

    /**
     * dfareporting.advertisers.update
     * @desc Updates an existing advertiser.
     * @alias dfareporting.advertisers.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Advertiser} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Advertisers$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Advertiser>;
    update(
      params: Params$Resource$Advertisers$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Advertiser>,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    update(
      params: Params$Resource$Advertisers$Update,
      callback: BodyResponseCallback<Schema$Advertiser>
    ): void;
    update(callback: BodyResponseCallback<Schema$Advertiser>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Advertisers$Update
        | BodyResponseCallback<Schema$Advertiser>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Advertiser>,
      callback?: BodyResponseCallback<Schema$Advertiser>
    ): void | GaxiosPromise<Schema$Advertiser> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Advertisers$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Advertisers$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/advertisers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Advertiser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Advertiser>(parameters);
      }
    }
  }

  export interface Params$Resource$Advertisers$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Advertisers$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Advertiser;
  }
  export interface Params$Resource$Advertisers$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only advertisers with these advertiser group IDs.
     */
    advertiserGroupIds?: string[];
    /**
     * Select only advertisers with these floodlight configuration IDs.
     */
    floodlightConfigurationIds?: string[];
    /**
     * Select only advertisers with these IDs.
     */
    ids?: string[];
    /**
     * Select only advertisers which do not belong to any advertiser group.
     */
    includeAdvertisersWithoutGroupsOnly?: boolean;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only advertisers which use another advertiser's floodlight configuration.
     */
    onlyParent?: boolean;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only advertisers with the specified status.
     */
    status?: string;
    /**
     * Select only advertisers with these subaccount IDs.
     */
    subaccountId?: string;
  }
  export interface Params$Resource$Advertisers$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Advertiser;
  }
  export interface Params$Resource$Advertisers$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Advertiser;
  }

  export class Resource$Browsers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.browsers.list
     * @desc Retrieves a list of browsers.
     * @alias dfareporting.browsers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Browsers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BrowsersListResponse>;
    list(
      params: Params$Resource$Browsers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BrowsersListResponse>,
      callback: BodyResponseCallback<Schema$BrowsersListResponse>
    ): void;
    list(
      params: Params$Resource$Browsers$List,
      callback: BodyResponseCallback<Schema$BrowsersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$BrowsersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Browsers$List
        | BodyResponseCallback<Schema$BrowsersListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$BrowsersListResponse>,
      callback?: BodyResponseCallback<Schema$BrowsersListResponse>
    ): void | GaxiosPromise<Schema$BrowsersListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Browsers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Browsers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/browsers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BrowsersListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BrowsersListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Browsers$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Campaigncreativeassociations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.campaignCreativeAssociations.insert
     * @desc Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
     * @alias dfareporting.campaignCreativeAssociations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Campaign ID in this association.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CampaignCreativeAssociation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Campaigncreativeassociations$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CampaignCreativeAssociation>;
    insert(
      params: Params$Resource$Campaigncreativeassociations$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignCreativeAssociation>,
      callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>
    ): void;
    insert(
      params: Params$Resource$Campaigncreativeassociations$Insert,
      callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>
    ): void;
    insert(
      callback: BodyResponseCallback<Schema$CampaignCreativeAssociation>
    ): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Campaigncreativeassociations$Insert
        | BodyResponseCallback<Schema$CampaignCreativeAssociation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignCreativeAssociation>,
      callback?: BodyResponseCallback<Schema$CampaignCreativeAssociation>
    ): void | GaxiosPromise<Schema$CampaignCreativeAssociation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Campaigncreativeassociations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigncreativeassociations$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CampaignCreativeAssociation>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CampaignCreativeAssociation>(parameters);
      }
    }

    /**
     * dfareporting.campaignCreativeAssociations.list
     * @desc Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
     * @alias dfareporting.campaignCreativeAssociations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.campaignId Campaign ID in this association.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Campaigncreativeassociations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CampaignCreativeAssociationsListResponse>;
    list(
      params: Params$Resource$Campaigncreativeassociations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>,
      callback: BodyResponseCallback<
        Schema$CampaignCreativeAssociationsListResponse
      >
    ): void;
    list(
      params: Params$Resource$Campaigncreativeassociations$List,
      callback: BodyResponseCallback<
        Schema$CampaignCreativeAssociationsListResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$CampaignCreativeAssociationsListResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Campaigncreativeassociations$List
        | BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignCreativeAssociationsListResponse>,
      callback?: BodyResponseCallback<
        Schema$CampaignCreativeAssociationsListResponse
      >
    ): void | GaxiosPromise<Schema$CampaignCreativeAssociationsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Campaigncreativeassociations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigncreativeassociations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'campaignId'],
        pathParams: ['campaignId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CampaignCreativeAssociationsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$CampaignCreativeAssociationsListResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Campaigncreativeassociations$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Campaign ID in this association.
     */
    campaignId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CampaignCreativeAssociation;
  }
  export interface Params$Resource$Campaigncreativeassociations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Campaign ID in this association.
     */
    campaignId?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Campaigns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.campaigns.get
     * @desc Gets one campaign by ID.
     * @alias dfareporting.campaigns.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Campaigns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    get(
      params: Params$Resource$Campaigns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    get(
      params: Params$Resource$Campaigns$Get,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    get(callback: BodyResponseCallback<Schema$Campaign>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Get
        | BodyResponseCallback<Schema$Campaign>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback?: BodyResponseCallback<Schema$Campaign>
    ): void | GaxiosPromise<Schema$Campaign> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/campaigns/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * dfareporting.campaigns.insert
     * @desc Inserts a new campaign.
     * @alias dfareporting.campaigns.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Campaigns$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    insert(
      params: Params$Resource$Campaigns$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    insert(
      params: Params$Resource$Campaigns$Insert,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Campaign>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Insert
        | BodyResponseCallback<Schema$Campaign>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback?: BodyResponseCallback<Schema$Campaign>
    ): void | GaxiosPromise<Schema$Campaign> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/campaigns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * dfareporting.campaigns.list
     * @desc Retrieves a list of campaigns, possibly filtered. This method supports paging.
     * @alias dfareporting.campaigns.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserGroupIds Select only campaigns whose advertisers belong to these advertiser groups.
     * @param {string=} params.advertiserIds Select only campaigns that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     * @param {boolean=} params.atLeastOneOptimizationActivity Select only campaigns that have at least one optimization activity.
     * @param {string=} params.excludedIds Exclude campaigns with these IDs.
     * @param {string=} params.ids Select only campaigns with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.overriddenEventTagId Select only campaigns that have overridden this event tag ID.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.subaccountId Select only campaigns that belong to this subaccount.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Campaigns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CampaignsListResponse>;
    list(
      params: Params$Resource$Campaigns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignsListResponse>,
      callback: BodyResponseCallback<Schema$CampaignsListResponse>
    ): void;
    list(
      params: Params$Resource$Campaigns$List,
      callback: BodyResponseCallback<Schema$CampaignsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CampaignsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Campaigns$List
        | BodyResponseCallback<Schema$CampaignsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CampaignsListResponse>,
      callback?: BodyResponseCallback<Schema$CampaignsListResponse>
    ): void | GaxiosPromise<Schema$CampaignsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/campaigns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CampaignsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CampaignsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.campaigns.patch
     * @desc Updates an existing campaign. This method supports patch semantics.
     * @alias dfareporting.campaigns.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Campaign ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Campaigns$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    patch(
      params: Params$Resource$Campaigns$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    patch(
      params: Params$Resource$Campaigns$Patch,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Campaign>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Patch
        | BodyResponseCallback<Schema$Campaign>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback?: BodyResponseCallback<Schema$Campaign>
    ): void | GaxiosPromise<Schema$Campaign> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/campaigns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }

    /**
     * dfareporting.campaigns.update
     * @desc Updates an existing campaign.
     * @alias dfareporting.campaigns.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Campaign} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Campaigns$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Campaign>;
    update(
      params: Params$Resource$Campaigns$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    update(
      params: Params$Resource$Campaigns$Update,
      callback: BodyResponseCallback<Schema$Campaign>
    ): void;
    update(callback: BodyResponseCallback<Schema$Campaign>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Campaigns$Update
        | BodyResponseCallback<Schema$Campaign>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Campaign>,
      callback?: BodyResponseCallback<Schema$Campaign>
    ): void | GaxiosPromise<Schema$Campaign> {
      let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Campaigns$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/campaigns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Campaign>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Campaign>(parameters);
      }
    }
  }

  export interface Params$Resource$Campaigns$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Campaign ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Campaigns$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }
  export interface Params$Resource$Campaigns$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only campaigns whose advertisers belong to these advertiser groups.
     */
    advertiserGroupIds?: string[];
    /**
     * Select only campaigns that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
     */
    archived?: boolean;
    /**
     * Select only campaigns that have at least one optimization activity.
     */
    atLeastOneOptimizationActivity?: boolean;
    /**
     * Exclude campaigns with these IDs.
     */
    excludedIds?: string[];
    /**
     * Select only campaigns with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only campaigns that have overridden this event tag ID.
     */
    overriddenEventTagId?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only campaigns that belong to this subaccount.
     */
    subaccountId?: string;
  }
  export interface Params$Resource$Campaigns$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Campaign ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }
  export interface Params$Resource$Campaigns$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Campaign;
  }

  export class Resource$Changelogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.changeLogs.get
     * @desc Gets one change log by ID.
     * @alias dfareporting.changeLogs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Change log ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Changelogs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChangeLog>;
    get(
      params: Params$Resource$Changelogs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ChangeLog>,
      callback: BodyResponseCallback<Schema$ChangeLog>
    ): void;
    get(
      params: Params$Resource$Changelogs$Get,
      callback: BodyResponseCallback<Schema$ChangeLog>
    ): void;
    get(callback: BodyResponseCallback<Schema$ChangeLog>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Changelogs$Get
        | BodyResponseCallback<Schema$ChangeLog>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChangeLog>,
      callback?: BodyResponseCallback<Schema$ChangeLog>
    ): void | GaxiosPromise<Schema$ChangeLog> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changelogs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changelogs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/changeLogs/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChangeLog>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChangeLog>(parameters);
      }
    }

    /**
     * dfareporting.changeLogs.list
     * @desc Retrieves a list of change logs. This method supports paging.
     * @alias dfareporting.changeLogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.action Select only change logs with the specified action.
     * @param {string=} params.ids Select only change logs with these IDs.
     * @param {string=} params.maxChangeTime Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.minChangeTime Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     * @param {string=} params.objectIds Select only change logs with these object IDs.
     * @param {string=} params.objectType Select only change logs with the specified object type.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Select only change logs whose object ID, user name, old or new values match the search string.
     * @param {string=} params.userProfileIds Select only change logs with these user profile IDs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Changelogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChangeLogsListResponse>;
    list(
      params: Params$Resource$Changelogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ChangeLogsListResponse>,
      callback: BodyResponseCallback<Schema$ChangeLogsListResponse>
    ): void;
    list(
      params: Params$Resource$Changelogs$List,
      callback: BodyResponseCallback<Schema$ChangeLogsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChangeLogsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Changelogs$List
        | BodyResponseCallback<Schema$ChangeLogsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChangeLogsListResponse>,
      callback?: BodyResponseCallback<Schema$ChangeLogsListResponse>
    ): void | GaxiosPromise<Schema$ChangeLogsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Changelogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Changelogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/changeLogs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChangeLogsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChangeLogsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Changelogs$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Change log ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Changelogs$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only change logs with the specified action.
     */
    action?: string;
    /**
     * Select only change logs with these IDs.
     */
    ids?: string[];
    /**
     * Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     */
    maxChangeTime?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
     */
    minChangeTime?: string;
    /**
     * Select only change logs with these object IDs.
     */
    objectIds?: string[];
    /**
     * Select only change logs with the specified object type.
     */
    objectType?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Select only change logs whose object ID, user name, old or new values match the search string.
     */
    searchString?: string;
    /**
     * Select only change logs with these user profile IDs.
     */
    userProfileIds?: string[];
  }

  export class Resource$Cities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.cities.list
     * @desc Retrieves a list of cities, possibly filtered.
     * @alias dfareporting.cities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.countryDartIds Select only cities from these countries.
     * @param {string=} params.dartIds Select only cities with these DART IDs.
     * @param {string=} params.namePrefix Select only cities with names starting with this prefix.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.regionDartIds Select only cities from these regions.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Cities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CitiesListResponse>;
    list(
      params: Params$Resource$Cities$List,
      options: MethodOptions | BodyResponseCallback<Schema$CitiesListResponse>,
      callback: BodyResponseCallback<Schema$CitiesListResponse>
    ): void;
    list(
      params: Params$Resource$Cities$List,
      callback: BodyResponseCallback<Schema$CitiesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CitiesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cities$List
        | BodyResponseCallback<Schema$CitiesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CitiesListResponse>,
      callback?: BodyResponseCallback<Schema$CitiesListResponse>
    ): void | GaxiosPromise<Schema$CitiesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/cities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CitiesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CitiesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cities$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only cities from these countries.
     */
    countryDartIds?: string[];
    /**
     * Select only cities with these DART IDs.
     */
    dartIds?: string[];
    /**
     * Select only cities with names starting with this prefix.
     */
    namePrefix?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Select only cities from these regions.
     */
    regionDartIds?: string[];
  }

  export class Resource$Connectiontypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.connectionTypes.get
     * @desc Gets one connection type by ID.
     * @alias dfareporting.connectionTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Connection type ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Connectiontypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectionType>;
    get(
      params: Params$Resource$Connectiontypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectionType>,
      callback: BodyResponseCallback<Schema$ConnectionType>
    ): void;
    get(
      params: Params$Resource$Connectiontypes$Get,
      callback: BodyResponseCallback<Schema$ConnectionType>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectionType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Connectiontypes$Get
        | BodyResponseCallback<Schema$ConnectionType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ConnectionType>,
      callback?: BodyResponseCallback<Schema$ConnectionType>
    ): void | GaxiosPromise<Schema$ConnectionType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Connectiontypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Connectiontypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/connectionTypes/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConnectionType>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ConnectionType>(parameters);
      }
    }

    /**
     * dfareporting.connectionTypes.list
     * @desc Retrieves a list of connection types.
     * @alias dfareporting.connectionTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Connectiontypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectionTypesListResponse>;
    list(
      params: Params$Resource$Connectiontypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ConnectionTypesListResponse>,
      callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>
    ): void;
    list(
      params: Params$Resource$Connectiontypes$List,
      callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ConnectionTypesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Connectiontypes$List
        | BodyResponseCallback<Schema$ConnectionTypesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ConnectionTypesListResponse>,
      callback?: BodyResponseCallback<Schema$ConnectionTypesListResponse>
    ): void | GaxiosPromise<Schema$ConnectionTypesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Connectiontypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Connectiontypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/connectionTypes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConnectionTypesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ConnectionTypesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Connectiontypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Connection type ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Connectiontypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Contentcategories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.contentCategories.delete
     * @desc Deletes an existing content category.
     * @alias dfareporting.contentCategories.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Contentcategories$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Contentcategories$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Contentcategories$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.contentCategories.get
     * @desc Gets one content category by ID.
     * @alias dfareporting.contentCategories.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Contentcategories$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentCategory>;
    get(
      params: Params$Resource$Contentcategories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    get(
      params: Params$Resource$Contentcategories$Get,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    get(callback: BodyResponseCallback<Schema$ContentCategory>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$Get
        | BodyResponseCallback<Schema$ContentCategory>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategory>,
      callback?: BodyResponseCallback<Schema$ContentCategory>
    ): void | GaxiosPromise<Schema$ContentCategory> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentCategory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContentCategory>(parameters);
      }
    }

    /**
     * dfareporting.contentCategories.insert
     * @desc Inserts a new content category.
     * @alias dfareporting.contentCategories.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().ContentCategory} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Contentcategories$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentCategory>;
    insert(
      params: Params$Resource$Contentcategories$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    insert(
      params: Params$Resource$Contentcategories$Insert,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ContentCategory>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$Insert
        | BodyResponseCallback<Schema$ContentCategory>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategory>,
      callback?: BodyResponseCallback<Schema$ContentCategory>
    ): void | GaxiosPromise<Schema$ContentCategory> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentCategory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContentCategory>(parameters);
      }
    }

    /**
     * dfareporting.contentCategories.list
     * @desc Retrieves a list of content categories, possibly filtered. This method supports paging.
     * @alias dfareporting.contentCategories.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only content categories with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Contentcategories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentCategoriesListResponse>;
    list(
      params: Params$Resource$Contentcategories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategoriesListResponse>,
      callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>
    ): void;
    list(
      params: Params$Resource$Contentcategories$List,
      callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ContentCategoriesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$List
        | BodyResponseCallback<Schema$ContentCategoriesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategoriesListResponse>,
      callback?: BodyResponseCallback<Schema$ContentCategoriesListResponse>
    ): void | GaxiosPromise<Schema$ContentCategoriesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentCategoriesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ContentCategoriesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.contentCategories.patch
     * @desc Updates an existing content category. This method supports patch semantics.
     * @alias dfareporting.contentCategories.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Content category ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().ContentCategory} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Contentcategories$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentCategory>;
    patch(
      params: Params$Resource$Contentcategories$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    patch(
      params: Params$Resource$Contentcategories$Patch,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ContentCategory>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$Patch
        | BodyResponseCallback<Schema$ContentCategory>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategory>,
      callback?: BodyResponseCallback<Schema$ContentCategory>
    ): void | GaxiosPromise<Schema$ContentCategory> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentCategory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContentCategory>(parameters);
      }
    }

    /**
     * dfareporting.contentCategories.update
     * @desc Updates an existing content category.
     * @alias dfareporting.contentCategories.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().ContentCategory} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Contentcategories$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContentCategory>;
    update(
      params: Params$Resource$Contentcategories$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ContentCategory>,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    update(
      params: Params$Resource$Contentcategories$Update,
      callback: BodyResponseCallback<Schema$ContentCategory>
    ): void;
    update(callback: BodyResponseCallback<Schema$ContentCategory>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Contentcategories$Update
        | BodyResponseCallback<Schema$ContentCategory>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ContentCategory>,
      callback?: BodyResponseCallback<Schema$ContentCategory>
    ): void | GaxiosPromise<Schema$ContentCategory> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Contentcategories$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Contentcategories$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/contentCategories'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ContentCategory>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ContentCategory>(parameters);
      }
    }
  }

  export interface Params$Resource$Contentcategories$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Content category ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Contentcategories$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Content category ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Contentcategories$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContentCategory;
  }
  export interface Params$Resource$Contentcategories$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only content categories with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Contentcategories$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Content category ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContentCategory;
  }
  export interface Params$Resource$Contentcategories$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContentCategory;
  }

  export class Resource$Conversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.conversions.batchinsert
     * @desc Inserts conversions.
     * @alias dfareporting.conversions.batchinsert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().ConversionsBatchInsertRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchinsert(
      params?: Params$Resource$Conversions$Batchinsert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionsBatchInsertResponse>;
    batchinsert(
      params: Params$Resource$Conversions$Batchinsert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ConversionsBatchInsertResponse>,
      callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>
    ): void;
    batchinsert(
      params: Params$Resource$Conversions$Batchinsert,
      callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>
    ): void;
    batchinsert(
      callback: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>
    ): void;
    batchinsert(
      paramsOrCallback?:
        | Params$Resource$Conversions$Batchinsert
        | BodyResponseCallback<Schema$ConversionsBatchInsertResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ConversionsBatchInsertResponse>,
      callback?: BodyResponseCallback<Schema$ConversionsBatchInsertResponse>
    ): void | GaxiosPromise<Schema$ConversionsBatchInsertResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversions$Batchinsert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversions$Batchinsert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/conversions/batchinsert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConversionsBatchInsertResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ConversionsBatchInsertResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.conversions.batchupdate
     * @desc Updates existing conversions.
     * @alias dfareporting.conversions.batchupdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().ConversionsBatchUpdateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchupdate(
      params?: Params$Resource$Conversions$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionsBatchUpdateResponse>;
    batchupdate(
      params: Params$Resource$Conversions$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>,
      callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>
    ): void;
    batchupdate(
      params: Params$Resource$Conversions$Batchupdate,
      callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>
    ): void;
    batchupdate(
      callback: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>
    ): void;
    batchupdate(
      paramsOrCallback?:
        | Params$Resource$Conversions$Batchupdate
        | BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>,
      callback?: BodyResponseCallback<Schema$ConversionsBatchUpdateResponse>
    ): void | GaxiosPromise<Schema$ConversionsBatchUpdateResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Conversions$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Conversions$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/conversions/batchupdate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConversionsBatchUpdateResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ConversionsBatchUpdateResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Conversions$Batchinsert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionsBatchInsertRequest;
  }
  export interface Params$Resource$Conversions$Batchupdate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionsBatchUpdateRequest;
  }

  export class Resource$Countries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.countries.get
     * @desc Gets one country by ID.
     * @alias dfareporting.countries.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dartId Country DART ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Countries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Country>;
    get(
      params: Params$Resource$Countries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Country>,
      callback: BodyResponseCallback<Schema$Country>
    ): void;
    get(
      params: Params$Resource$Countries$Get,
      callback: BodyResponseCallback<Schema$Country>
    ): void;
    get(callback: BodyResponseCallback<Schema$Country>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Countries$Get
        | BodyResponseCallback<Schema$Country>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Country>,
      callback?: BodyResponseCallback<Schema$Country>
    ): void | GaxiosPromise<Schema$Country> {
      let params = (paramsOrCallback || {}) as Params$Resource$Countries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Countries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/countries/{dartId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'dartId'],
        pathParams: ['dartId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Country>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Country>(parameters);
      }
    }

    /**
     * dfareporting.countries.list
     * @desc Retrieves a list of countries.
     * @alias dfareporting.countries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Countries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CountriesListResponse>;
    list(
      params: Params$Resource$Countries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CountriesListResponse>,
      callback: BodyResponseCallback<Schema$CountriesListResponse>
    ): void;
    list(
      params: Params$Resource$Countries$List,
      callback: BodyResponseCallback<Schema$CountriesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CountriesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Countries$List
        | BodyResponseCallback<Schema$CountriesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CountriesListResponse>,
      callback?: BodyResponseCallback<Schema$CountriesListResponse>
    ): void | GaxiosPromise<Schema$CountriesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Countries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Countries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/countries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CountriesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CountriesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Countries$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Country DART ID.
     */
    dartId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Countries$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Creativeassets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.creativeAssets.insert
     * @desc Inserts a new creative asset.
     * @alias dfareporting.creativeAssets.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.advertiserId Advertiser ID of this creative. This is a required field.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Creativeassets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeAssetMetadata>;
    insert(
      params: Params$Resource$Creativeassets$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeAssetMetadata>,
      callback: BodyResponseCallback<Schema$CreativeAssetMetadata>
    ): void;
    insert(
      params: Params$Resource$Creativeassets$Insert,
      callback: BodyResponseCallback<Schema$CreativeAssetMetadata>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CreativeAssetMetadata>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creativeassets$Insert
        | BodyResponseCallback<Schema$CreativeAssetMetadata>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeAssetMetadata>,
      callback?: BodyResponseCallback<Schema$CreativeAssetMetadata>
    ): void | GaxiosPromise<Schema$CreativeAssetMetadata> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativeassets$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativeassets$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/dfareporting/v3.2/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['profileId', 'advertiserId'],
        pathParams: ['advertiserId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeAssetMetadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeAssetMetadata>(parameters);
      }
    }
  }

  export interface Params$Resource$Creativeassets$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Advertiser ID of this creative. This is a required field.
     */
    advertiserId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeAssetMetadata;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Creativefields {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.creativeFields.delete
     * @desc Deletes an existing creative field.
     * @alias dfareporting.creativeFields.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Creativefields$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Creativefields$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Creativefields$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Creativefields$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.creativeFields.get
     * @desc Gets one creative field by ID.
     * @alias dfareporting.creativeFields.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Creativefields$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeField>;
    get(
      params: Params$Resource$Creativefields$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeField>,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    get(
      params: Params$Resource$Creativefields$Get,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    get(callback: BodyResponseCallback<Schema$CreativeField>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creativefields$Get
        | BodyResponseCallback<Schema$CreativeField>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeField>,
      callback?: BodyResponseCallback<Schema$CreativeField>
    ): void | GaxiosPromise<Schema$CreativeField> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeField>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeField>(parameters);
      }
    }

    /**
     * dfareporting.creativeFields.insert
     * @desc Inserts a new creative field.
     * @alias dfareporting.creativeFields.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeField} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Creativefields$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeField>;
    insert(
      params: Params$Resource$Creativefields$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeField>,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    insert(
      params: Params$Resource$Creativefields$Insert,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CreativeField>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creativefields$Insert
        | BodyResponseCallback<Schema$CreativeField>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeField>,
      callback?: BodyResponseCallback<Schema$CreativeField>
    ): void | GaxiosPromise<Schema$CreativeField> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeField>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeField>(parameters);
      }
    }

    /**
     * dfareporting.creativeFields.list
     * @desc Retrieves a list of creative fields, possibly filtered. This method supports paging.
     * @alias dfareporting.creativeFields.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only creative fields that belong to these advertisers.
     * @param {string=} params.ids Select only creative fields with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Creativefields$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldsListResponse>;
    list(
      params: Params$Resource$Creativefields$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldsListResponse>,
      callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>
    ): void;
    list(
      params: Params$Resource$Creativefields$List,
      callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CreativeFieldsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creativefields$List
        | BodyResponseCallback<Schema$CreativeFieldsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldsListResponse>,
      callback?: BodyResponseCallback<Schema$CreativeFieldsListResponse>
    ): void | GaxiosPromise<Schema$CreativeFieldsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CreativeFieldsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.creativeFields.patch
     * @desc Updates an existing creative field. This method supports patch semantics.
     * @alias dfareporting.creativeFields.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative Field ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeField} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Creativefields$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeField>;
    patch(
      params: Params$Resource$Creativefields$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeField>,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    patch(
      params: Params$Resource$Creativefields$Patch,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CreativeField>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Creativefields$Patch
        | BodyResponseCallback<Schema$CreativeField>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeField>,
      callback?: BodyResponseCallback<Schema$CreativeField>
    ): void | GaxiosPromise<Schema$CreativeField> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeField>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeField>(parameters);
      }
    }

    /**
     * dfareporting.creativeFields.update
     * @desc Updates an existing creative field.
     * @alias dfareporting.creativeFields.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeField} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Creativefields$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeField>;
    update(
      params: Params$Resource$Creativefields$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeField>,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    update(
      params: Params$Resource$Creativefields$Update,
      callback: BodyResponseCallback<Schema$CreativeField>
    ): void;
    update(callback: BodyResponseCallback<Schema$CreativeField>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Creativefields$Update
        | BodyResponseCallback<Schema$CreativeField>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeField>,
      callback?: BodyResponseCallback<Schema$CreativeField>
    ): void | GaxiosPromise<Schema$CreativeField> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefields$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefields$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeField>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeField>(parameters);
      }
    }
  }

  export interface Params$Resource$Creativefields$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative Field ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creativefields$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative Field ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creativefields$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeField;
  }
  export interface Params$Resource$Creativefields$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only creative fields that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only creative fields with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Creativefields$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative Field ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeField;
  }
  export interface Params$Resource$Creativefields$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeField;
  }

  export class Resource$Creativefieldvalues {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.creativeFieldValues.delete
     * @desc Deletes an existing creative field value.
     * @alias dfareporting.creativeFieldValues.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Creativefieldvalues$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Creativefieldvalues$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Creativefieldvalues$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.creativeFieldValues.get
     * @desc Gets one creative field value by ID.
     * @alias dfareporting.creativeFieldValues.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Creativefieldvalues$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldValue>;
    get(
      params: Params$Resource$Creativefieldvalues$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    get(
      params: Params$Resource$Creativefieldvalues$Get,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    get(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$Get
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback?: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void | GaxiosPromise<Schema$CreativeFieldValue> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldValue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeFieldValue>(parameters);
      }
    }

    /**
     * dfareporting.creativeFieldValues.insert
     * @desc Inserts a new creative field value.
     * @alias dfareporting.creativeFieldValues.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeFieldValue} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Creativefieldvalues$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldValue>;
    insert(
      params: Params$Resource$Creativefieldvalues$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    insert(
      params: Params$Resource$Creativefieldvalues$Insert,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$Insert
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback?: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void | GaxiosPromise<Schema$CreativeFieldValue> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldValue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeFieldValue>(parameters);
      }
    }

    /**
     * dfareporting.creativeFieldValues.list
     * @desc Retrieves a list of creative field values, possibly filtered. This method supports paging.
     * @alias dfareporting.creativeFieldValues.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string=} params.ids Select only creative field values with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Creativefieldvalues$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldValuesListResponse>;
    list(
      params: Params$Resource$Creativefieldvalues$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValuesListResponse>,
      callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>
    ): void;
    list(
      params: Params$Resource$Creativefieldvalues$List,
      callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$List
        | BodyResponseCallback<Schema$CreativeFieldValuesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValuesListResponse>,
      callback?: BodyResponseCallback<Schema$CreativeFieldValuesListResponse>
    ): void | GaxiosPromise<Schema$CreativeFieldValuesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldValuesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CreativeFieldValuesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.creativeFieldValues.patch
     * @desc Updates an existing creative field value. This method supports patch semantics.
     * @alias dfareporting.creativeFieldValues.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.id Creative Field Value ID
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeFieldValue} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Creativefieldvalues$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldValue>;
    patch(
      params: Params$Resource$Creativefieldvalues$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    patch(
      params: Params$Resource$Creativefieldvalues$Patch,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$Patch
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback?: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void | GaxiosPromise<Schema$CreativeFieldValue> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId', 'id'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldValue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeFieldValue>(parameters);
      }
    }

    /**
     * dfareporting.creativeFieldValues.update
     * @desc Updates an existing creative field value.
     * @alias dfareporting.creativeFieldValues.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeFieldId Creative field ID for this creative field value.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeFieldValue} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Creativefieldvalues$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeFieldValue>;
    update(
      params: Params$Resource$Creativefieldvalues$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    update(
      params: Params$Resource$Creativefieldvalues$Update,
      callback: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void;
    update(callback: BodyResponseCallback<Schema$CreativeFieldValue>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Creativefieldvalues$Update
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeFieldValue>,
      callback?: BodyResponseCallback<Schema$CreativeFieldValue>
    ): void | GaxiosPromise<Schema$CreativeFieldValue> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativefieldvalues$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativefieldvalues$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'creativeFieldId'],
        pathParams: ['creativeFieldId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeFieldValue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeFieldValue>(parameters);
      }
    }
  }

  export interface Params$Resource$Creativefieldvalues$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * Creative Field Value ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creativefieldvalues$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * Creative Field Value ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creativefieldvalues$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeFieldValue;
  }
  export interface Params$Resource$Creativefieldvalues$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * Select only creative field values with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Creativefieldvalues$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * Creative Field Value ID
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeFieldValue;
  }
  export interface Params$Resource$Creativefieldvalues$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative field ID for this creative field value.
     */
    creativeFieldId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeFieldValue;
  }

  export class Resource$Creativegroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.creativeGroups.get
     * @desc Gets one creative group by ID.
     * @alias dfareporting.creativeGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Creativegroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeGroup>;
    get(
      params: Params$Resource$Creativegroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    get(
      params: Params$Resource$Creativegroups$Get,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creativegroups$Get
        | BodyResponseCallback<Schema$CreativeGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroup>,
      callback?: BodyResponseCallback<Schema$CreativeGroup>
    ): void | GaxiosPromise<Schema$CreativeGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativegroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativegroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeGroup>(parameters);
      }
    }

    /**
     * dfareporting.creativeGroups.insert
     * @desc Inserts a new creative group.
     * @alias dfareporting.creativeGroups.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Creativegroups$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeGroup>;
    insert(
      params: Params$Resource$Creativegroups$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    insert(
      params: Params$Resource$Creativegroups$Insert,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creativegroups$Insert
        | BodyResponseCallback<Schema$CreativeGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroup>,
      callback?: BodyResponseCallback<Schema$CreativeGroup>
    ): void | GaxiosPromise<Schema$CreativeGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativegroups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativegroups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeGroup>(parameters);
      }
    }

    /**
     * dfareporting.creativeGroups.list
     * @desc Retrieves a list of creative groups, possibly filtered. This method supports paging.
     * @alias dfareporting.creativeGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only creative groups that belong to these advertisers.
     * @param {integer=} params.groupNumber Select only creative groups that belong to this subgroup.
     * @param {string=} params.ids Select only creative groups with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Creativegroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeGroupsListResponse>;
    list(
      params: Params$Resource$Creativegroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroupsListResponse>,
      callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>
    ): void;
    list(
      params: Params$Resource$Creativegroups$List,
      callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CreativeGroupsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creativegroups$List
        | BodyResponseCallback<Schema$CreativeGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroupsListResponse>,
      callback?: BodyResponseCallback<Schema$CreativeGroupsListResponse>
    ): void | GaxiosPromise<Schema$CreativeGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativegroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativegroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CreativeGroupsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.creativeGroups.patch
     * @desc Updates an existing creative group. This method supports patch semantics.
     * @alias dfareporting.creativeGroups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Creativegroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeGroup>;
    patch(
      params: Params$Resource$Creativegroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    patch(
      params: Params$Resource$Creativegroups$Patch,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Creativegroups$Patch
        | BodyResponseCallback<Schema$CreativeGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroup>,
      callback?: BodyResponseCallback<Schema$CreativeGroup>
    ): void | GaxiosPromise<Schema$CreativeGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativegroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativegroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeGroup>(parameters);
      }
    }

    /**
     * dfareporting.creativeGroups.update
     * @desc Updates an existing creative group.
     * @alias dfareporting.creativeGroups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().CreativeGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Creativegroups$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativeGroup>;
    update(
      params: Params$Resource$Creativegroups$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CreativeGroup>,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    update(
      params: Params$Resource$Creativegroups$Update,
      callback: BodyResponseCallback<Schema$CreativeGroup>
    ): void;
    update(callback: BodyResponseCallback<Schema$CreativeGroup>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Creativegroups$Update
        | BodyResponseCallback<Schema$CreativeGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativeGroup>,
      callback?: BodyResponseCallback<Schema$CreativeGroup>
    ): void | GaxiosPromise<Schema$CreativeGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Creativegroups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creativegroups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creativeGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativeGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativeGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Creativegroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creativegroups$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeGroup;
  }
  export interface Params$Resource$Creativegroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only creative groups that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only creative groups that belong to this subgroup.
     */
    groupNumber?: number;
    /**
     * Select only creative groups with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Creativegroups$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeGroup;
  }
  export interface Params$Resource$Creativegroups$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreativeGroup;
  }

  export class Resource$Creatives {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.creatives.get
     * @desc Gets one creative by ID.
     * @alias dfareporting.creatives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Creatives$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    get(
      params: Params$Resource$Creatives$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(
      params: Params$Resource$Creatives$Get,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Creatives$Get
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/creatives/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * dfareporting.creatives.insert
     * @desc Inserts a new creative.
     * @alias dfareporting.creatives.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Creatives$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    insert(
      params: Params$Resource$Creatives$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(
      params: Params$Resource$Creatives$Insert,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Creative>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Creatives$Insert
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/creatives'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * dfareporting.creatives.list
     * @desc Retrieves a list of creatives, possibly filtered. This method supports paging.
     * @alias dfareporting.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active creatives. Leave blank to select active and inactive creatives.
     * @param {string=} params.advertiserId Select only creatives with this advertiser ID.
     * @param {boolean=} params.archived Select only archived creatives. Leave blank to select archived and unarchived creatives.
     * @param {string=} params.campaignId Select only creatives with this campaign ID.
     * @param {string=} params.companionCreativeIds Select only in-stream video creatives with these companion IDs.
     * @param {string=} params.creativeFieldIds Select only creatives with these creative field IDs.
     * @param {string=} params.ids Select only creatives with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.renderingIds Select only creatives with these rendering IDs.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     * @param {string=} params.sizeIds Select only creatives with these size IDs.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.studioCreativeId Select only creatives corresponding to this Studio creative ID.
     * @param {string=} params.types Select only creatives with these creative types.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Creatives$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CreativesListResponse>;
    list(
      params: Params$Resource$Creatives$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativesListResponse>,
      callback: BodyResponseCallback<Schema$CreativesListResponse>
    ): void;
    list(
      params: Params$Resource$Creatives$List,
      callback: BodyResponseCallback<Schema$CreativesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CreativesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Creatives$List
        | BodyResponseCallback<Schema$CreativesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CreativesListResponse>,
      callback?: BodyResponseCallback<Schema$CreativesListResponse>
    ): void | GaxiosPromise<Schema$CreativesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/creatives'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CreativesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CreativesListResponse>(parameters);
      }
    }

    /**
     * dfareporting.creatives.patch
     * @desc Updates an existing creative. This method supports patch semantics.
     * @alias dfareporting.creatives.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Creative ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Creatives$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    patch(
      params: Params$Resource$Creatives$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    patch(
      params: Params$Resource$Creatives$Patch,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Creative>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Creatives$Patch
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/creatives'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }

    /**
     * dfareporting.creatives.update
     * @desc Updates an existing creative.
     * @alias dfareporting.creatives.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Creatives$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Creative>;
    update(
      params: Params$Resource$Creatives$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    update(
      params: Params$Resource$Creatives$Update,
      callback: BodyResponseCallback<Schema$Creative>
    ): void;
    update(callback: BodyResponseCallback<Schema$Creative>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Creatives$Update
        | BodyResponseCallback<Schema$Creative>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Creative>,
      callback?: BodyResponseCallback<Schema$Creative>
    ): void | GaxiosPromise<Schema$Creative> {
      let params = (paramsOrCallback || {}) as Params$Resource$Creatives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Creatives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/creatives'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }
  }

  export interface Params$Resource$Creatives$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Creatives$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Creatives$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active creatives. Leave blank to select active and inactive creatives.
     */
    active?: boolean;
    /**
     * Select only creatives with this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Select only archived creatives. Leave blank to select archived and unarchived creatives.
     */
    archived?: boolean;
    /**
     * Select only creatives with this campaign ID.
     */
    campaignId?: string;
    /**
     * Select only in-stream video creatives with these companion IDs.
     */
    companionCreativeIds?: string[];
    /**
     * Select only creatives with these creative field IDs.
     */
    creativeFieldIds?: string[];
    /**
     * Select only creatives with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Select only creatives with these rendering IDs.
     */
    renderingIds?: string[];
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
     */
    searchString?: string;
    /**
     * Select only creatives with these size IDs.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only creatives corresponding to this Studio creative ID.
     */
    studioCreativeId?: string;
    /**
     * Select only creatives with these creative types.
     */
    types?: string[];
  }
  export interface Params$Resource$Creatives$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Creative ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Creatives$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }

  export class Resource$Dimensionvalues {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.dimensionValues.query
     * @desc Retrieves list of report dimension values for a list of filters.
     * @alias dfareporting.dimensionValues.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA user profile ID.
     * @param {().DimensionValueRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
      params?: Params$Resource$Dimensionvalues$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DimensionValueList>;
    query(
      params: Params$Resource$Dimensionvalues$Query,
      options: MethodOptions | BodyResponseCallback<Schema$DimensionValueList>,
      callback: BodyResponseCallback<Schema$DimensionValueList>
    ): void;
    query(
      params: Params$Resource$Dimensionvalues$Query,
      callback: BodyResponseCallback<Schema$DimensionValueList>
    ): void;
    query(callback: BodyResponseCallback<Schema$DimensionValueList>): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Dimensionvalues$Query
        | BodyResponseCallback<Schema$DimensionValueList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DimensionValueList>,
      callback?: BodyResponseCallback<Schema$DimensionValueList>
    ): void | GaxiosPromise<Schema$DimensionValueList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Dimensionvalues$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dimensionvalues$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/dimensionvalues/query'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DimensionValueList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DimensionValueList>(parameters);
      }
    }
  }

  export interface Params$Resource$Dimensionvalues$Query
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous result page.
     */
    pageToken?: string;
    /**
     * The DFA user profile ID.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DimensionValueRequest;
  }

  export class Resource$Directorysitecontacts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.directorySiteContacts.get
     * @desc Gets one directory site contact by ID.
     * @alias dfareporting.directorySiteContacts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Directory site contact ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Directorysitecontacts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectorySiteContact>;
    get(
      params: Params$Resource$Directorysitecontacts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySiteContact>,
      callback: BodyResponseCallback<Schema$DirectorySiteContact>
    ): void;
    get(
      params: Params$Resource$Directorysitecontacts$Get,
      callback: BodyResponseCallback<Schema$DirectorySiteContact>
    ): void;
    get(callback: BodyResponseCallback<Schema$DirectorySiteContact>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Directorysitecontacts$Get
        | BodyResponseCallback<Schema$DirectorySiteContact>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySiteContact>,
      callback?: BodyResponseCallback<Schema$DirectorySiteContact>
    ): void | GaxiosPromise<Schema$DirectorySiteContact> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Directorysitecontacts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directorysitecontacts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/directorySiteContacts/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectorySiteContact>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectorySiteContact>(parameters);
      }
    }

    /**
     * dfareporting.directorySiteContacts.list
     * @desc Retrieves a list of directory site contacts, possibly filtered. This method supports paging.
     * @alias dfareporting.directorySiteContacts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.directorySiteIds Select only directory site contacts with these directory site IDs. This is a required field.
     * @param {string=} params.ids Select only directory site contacts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Directorysitecontacts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectorySiteContactsListResponse>;
    list(
      params: Params$Resource$Directorysitecontacts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySiteContactsListResponse>,
      callback: BodyResponseCallback<Schema$DirectorySiteContactsListResponse>
    ): void;
    list(
      params: Params$Resource$Directorysitecontacts$List,
      callback: BodyResponseCallback<Schema$DirectorySiteContactsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DirectorySiteContactsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Directorysitecontacts$List
        | BodyResponseCallback<Schema$DirectorySiteContactsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySiteContactsListResponse>,
      callback?: BodyResponseCallback<Schema$DirectorySiteContactsListResponse>
    ): void | GaxiosPromise<Schema$DirectorySiteContactsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Directorysitecontacts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directorysitecontacts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/directorySiteContacts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectorySiteContactsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$DirectorySiteContactsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Directorysitecontacts$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Directory site contact ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Directorysitecontacts$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only directory site contacts with these directory site IDs. This is a required field.
     */
    directorySiteIds?: string[];
    /**
     * Select only directory site contacts with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Directorysites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.directorySites.get
     * @desc Gets one directory site by ID.
     * @alias dfareporting.directorySites.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Directory site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Directorysites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectorySite>;
    get(
      params: Params$Resource$Directorysites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DirectorySite>,
      callback: BodyResponseCallback<Schema$DirectorySite>
    ): void;
    get(
      params: Params$Resource$Directorysites$Get,
      callback: BodyResponseCallback<Schema$DirectorySite>
    ): void;
    get(callback: BodyResponseCallback<Schema$DirectorySite>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Directorysites$Get
        | BodyResponseCallback<Schema$DirectorySite>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySite>,
      callback?: BodyResponseCallback<Schema$DirectorySite>
    ): void | GaxiosPromise<Schema$DirectorySite> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Directorysites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directorysites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/directorySites/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectorySite>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectorySite>(parameters);
      }
    }

    /**
     * dfareporting.directorySites.insert
     * @desc Inserts a new directory site.
     * @alias dfareporting.directorySites.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().DirectorySite} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Directorysites$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectorySite>;
    insert(
      params: Params$Resource$Directorysites$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$DirectorySite>,
      callback: BodyResponseCallback<Schema$DirectorySite>
    ): void;
    insert(
      params: Params$Resource$Directorysites$Insert,
      callback: BodyResponseCallback<Schema$DirectorySite>
    ): void;
    insert(callback: BodyResponseCallback<Schema$DirectorySite>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Directorysites$Insert
        | BodyResponseCallback<Schema$DirectorySite>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySite>,
      callback?: BodyResponseCallback<Schema$DirectorySite>
    ): void | GaxiosPromise<Schema$DirectorySite> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Directorysites$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directorysites$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/directorySites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectorySite>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DirectorySite>(parameters);
      }
    }

    /**
     * dfareporting.directorySites.list
     * @desc Retrieves a list of directory sites, possibly filtered. This method supports paging.
     * @alias dfareporting.directorySites.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsPublisherPaidPlacements Select only directory sites that accept publisher paid placements. This field can be left blank.
     * @param {boolean=} params.active Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
     * @param {string=} params.countryId Select only directory sites with this country ID.
     * @param {string=} params.dfpNetworkCode Select only directory sites with this Ad Manager network code.
     * @param {string=} params.ids Select only directory sites with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.parentId Select only directory sites with this parent ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Directorysites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DirectorySitesListResponse>;
    list(
      params: Params$Resource$Directorysites$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySitesListResponse>,
      callback: BodyResponseCallback<Schema$DirectorySitesListResponse>
    ): void;
    list(
      params: Params$Resource$Directorysites$List,
      callback: BodyResponseCallback<Schema$DirectorySitesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DirectorySitesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Directorysites$List
        | BodyResponseCallback<Schema$DirectorySitesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DirectorySitesListResponse>,
      callback?: BodyResponseCallback<Schema$DirectorySitesListResponse>
    ): void | GaxiosPromise<Schema$DirectorySitesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Directorysites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Directorysites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/directorySites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DirectorySitesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$DirectorySitesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Directorysites$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Directory site ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Directorysites$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DirectorySite;
  }
  export interface Params$Resource$Directorysites$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInStreamVideoPlacements?: boolean;
    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInterstitialPlacements?: boolean;
    /**
     * Select only directory sites that accept publisher paid placements. This field can be left blank.
     */
    acceptsPublisherPaidPlacements?: boolean;
    /**
     * Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
     */
    active?: boolean;
    /**
     * Select only directory sites with this country ID.
     */
    countryId?: string;
    /**
     * Select only directory sites with this Ad Manager network code.
     */
    dfpNetworkCode?: string;
    /**
     * Select only directory sites with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only directory sites with this parent ID.
     */
    parentId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Dynamictargetingkeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.dynamicTargetingKeys.delete
     * @desc Deletes an existing dynamic targeting key.
     * @alias dfareporting.dynamicTargetingKeys.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
     * @param {string} params.objectId ID of the object of this dynamic targeting key. This is a required field.
     * @param {string} params.objectType Type of the object of this dynamic targeting key. This is a required field.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Dynamictargetingkeys$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Dynamictargetingkeys$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Dynamictargetingkeys$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Dynamictargetingkeys$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Dynamictargetingkeys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dynamictargetingkeys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'objectId', 'name', 'objectType'],
        pathParams: ['objectId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.dynamicTargetingKeys.insert
     * @desc Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
     * @alias dfareporting.dynamicTargetingKeys.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().DynamicTargetingKey} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Dynamictargetingkeys$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DynamicTargetingKey>;
    insert(
      params: Params$Resource$Dynamictargetingkeys$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$DynamicTargetingKey>,
      callback: BodyResponseCallback<Schema$DynamicTargetingKey>
    ): void;
    insert(
      params: Params$Resource$Dynamictargetingkeys$Insert,
      callback: BodyResponseCallback<Schema$DynamicTargetingKey>
    ): void;
    insert(callback: BodyResponseCallback<Schema$DynamicTargetingKey>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Dynamictargetingkeys$Insert
        | BodyResponseCallback<Schema$DynamicTargetingKey>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DynamicTargetingKey>,
      callback?: BodyResponseCallback<Schema$DynamicTargetingKey>
    ): void | GaxiosPromise<Schema$DynamicTargetingKey> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Dynamictargetingkeys$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dynamictargetingkeys$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/dynamicTargetingKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DynamicTargetingKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DynamicTargetingKey>(parameters);
      }
    }

    /**
     * dfareporting.dynamicTargetingKeys.list
     * @desc Retrieves a list of dynamic targeting keys.
     * @alias dfareporting.dynamicTargetingKeys.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only dynamic targeting keys whose object has this advertiser ID.
     * @param {string=} params.names Select only dynamic targeting keys exactly matching these names.
     * @param {string=} params.objectId Select only dynamic targeting keys with this object ID.
     * @param {string=} params.objectType Select only dynamic targeting keys with this object type.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Dynamictargetingkeys$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DynamicTargetingKeysListResponse>;
    list(
      params: Params$Resource$Dynamictargetingkeys$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>,
      callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>
    ): void;
    list(
      params: Params$Resource$Dynamictargetingkeys$List,
      callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Dynamictargetingkeys$List
        | BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>,
      callback?: BodyResponseCallback<Schema$DynamicTargetingKeysListResponse>
    ): void | GaxiosPromise<Schema$DynamicTargetingKeysListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Dynamictargetingkeys$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Dynamictargetingkeys$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/dynamicTargetingKeys'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DynamicTargetingKeysListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$DynamicTargetingKeysListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Dynamictargetingkeys$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
     */
    name?: string;
    /**
     * ID of the object of this dynamic targeting key. This is a required field.
     */
    objectId?: string;
    /**
     * Type of the object of this dynamic targeting key. This is a required field.
     */
    objectType?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Dynamictargetingkeys$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DynamicTargetingKey;
  }
  export interface Params$Resource$Dynamictargetingkeys$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only dynamic targeting keys whose object has this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Select only dynamic targeting keys exactly matching these names.
     */
    names?: string[];
    /**
     * Select only dynamic targeting keys with this object ID.
     */
    objectId?: string;
    /**
     * Select only dynamic targeting keys with this object type.
     */
    objectType?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Eventtags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.eventTags.delete
     * @desc Deletes an existing event tag.
     * @alias dfareporting.eventTags.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Eventtags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Eventtags$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Eventtags$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Eventtags$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/eventTags/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.eventTags.get
     * @desc Gets one event tag by ID.
     * @alias dfareporting.eventTags.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Eventtags$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTag>;
    get(
      params: Params$Resource$Eventtags$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    get(
      params: Params$Resource$Eventtags$Get,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    get(callback: BodyResponseCallback<Schema$EventTag>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Eventtags$Get
        | BodyResponseCallback<Schema$EventTag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback?: BodyResponseCallback<Schema$EventTag>
    ): void | GaxiosPromise<Schema$EventTag> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/eventTags/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTag>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventTag>(parameters);
      }
    }

    /**
     * dfareporting.eventTags.insert
     * @desc Inserts a new event tag.
     * @alias dfareporting.eventTags.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().EventTag} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Eventtags$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTag>;
    insert(
      params: Params$Resource$Eventtags$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    insert(
      params: Params$Resource$Eventtags$Insert,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EventTag>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Eventtags$Insert
        | BodyResponseCallback<Schema$EventTag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback?: BodyResponseCallback<Schema$EventTag>
    ): void | GaxiosPromise<Schema$EventTag> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/eventTags'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTag>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventTag>(parameters);
      }
    }

    /**
     * dfareporting.eventTags.list
     * @desc Retrieves a list of event tags, possibly filtered.
     * @alias dfareporting.eventTags.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.adId Select only event tags that belong to this ad.
     * @param {string=} params.advertiserId Select only event tags that belong to this advertiser.
     * @param {string=} params.campaignId Select only event tags that belong to this campaign.
     * @param {boolean=} params.definitionsOnly Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
     * @param {boolean=} params.enabled Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
     * @param {string=} params.eventTagTypes Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
     * @param {string=} params.ids Select only event tags with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Eventtags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTagsListResponse>;
    list(
      params: Params$Resource$Eventtags$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTagsListResponse>,
      callback: BodyResponseCallback<Schema$EventTagsListResponse>
    ): void;
    list(
      params: Params$Resource$Eventtags$List,
      callback: BodyResponseCallback<Schema$EventTagsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$EventTagsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Eventtags$List
        | BodyResponseCallback<Schema$EventTagsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$EventTagsListResponse>,
      callback?: BodyResponseCallback<Schema$EventTagsListResponse>
    ): void | GaxiosPromise<Schema$EventTagsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/eventTags'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTagsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventTagsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.eventTags.patch
     * @desc Updates an existing event tag. This method supports patch semantics.
     * @alias dfareporting.eventTags.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Event tag ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().EventTag} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Eventtags$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTag>;
    patch(
      params: Params$Resource$Eventtags$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    patch(
      params: Params$Resource$Eventtags$Patch,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EventTag>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Eventtags$Patch
        | BodyResponseCallback<Schema$EventTag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback?: BodyResponseCallback<Schema$EventTag>
    ): void | GaxiosPromise<Schema$EventTag> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/eventTags'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTag>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventTag>(parameters);
      }
    }

    /**
     * dfareporting.eventTags.update
     * @desc Updates an existing event tag.
     * @alias dfareporting.eventTags.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().EventTag} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Eventtags$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventTag>;
    update(
      params: Params$Resource$Eventtags$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    update(
      params: Params$Resource$Eventtags$Update,
      callback: BodyResponseCallback<Schema$EventTag>
    ): void;
    update(callback: BodyResponseCallback<Schema$EventTag>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Eventtags$Update
        | BodyResponseCallback<Schema$EventTag>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$EventTag>,
      callback?: BodyResponseCallback<Schema$EventTag>
    ): void | GaxiosPromise<Schema$EventTag> {
      let params = (paramsOrCallback || {}) as Params$Resource$Eventtags$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Eventtags$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/eventTags'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EventTag>(parameters, callback);
      } else {
        return createAPIRequest<Schema$EventTag>(parameters);
      }
    }
  }

  export interface Params$Resource$Eventtags$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Event tag ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Eventtags$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Event tag ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Eventtags$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTag;
  }
  export interface Params$Resource$Eventtags$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only event tags that belong to this ad.
     */
    adId?: string;
    /**
     * Select only event tags that belong to this advertiser.
     */
    advertiserId?: string;
    /**
     * Select only event tags that belong to this campaign.
     */
    campaignId?: string;
    /**
     * Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
     */
    definitionsOnly?: boolean;
    /**
     * Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
     */
    enabled?: boolean;
    /**
     * Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
     */
    eventTagTypes?: string[];
    /**
     * Select only event tags with these IDs.
     */
    ids?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Eventtags$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Event tag ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTag;
  }
  export interface Params$Resource$Eventtags$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventTag;
  }

  export class Resource$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.files.get
     * @desc Retrieves a report file by its report ID and file ID. This method supports media download.
     * @alias dfareporting.files.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the report file.
     * @param {string} params.reportId The ID of the report.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Files$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    get(
      params: Params$Resource$Files$Get,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(
      params: Params$Resource$Files$Get,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(callback: BodyResponseCallback<Schema$File>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Files$Get
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/reports/{reportId}/files/{fileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['reportId', 'fileId'],
        pathParams: ['fileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * dfareporting.files.list
     * @desc Lists files for a user profile.
     * @alias dfareporting.files.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA profile ID.
     * @param {string=} params.scope The scope that defines which results are returned.
     * @param {string=} params.sortField The field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FileList>;
    list(
      params: Params$Resource$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(
      params: Params$Resource$Files$List,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$FileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Files$List
        | BodyResponseCallback<Schema$FileList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback?: BodyResponseCallback<Schema$FileList>
    ): void | GaxiosPromise<Schema$FileList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/files'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FileList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FileList>(parameters);
      }
    }
  }

  export interface Params$Resource$Files$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the report file.
     */
    fileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;
  }
  export interface Params$Resource$Files$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous result page.
     */
    pageToken?: string;
    /**
     * The DFA profile ID.
     */
    profileId?: string;
    /**
     * The scope that defines which results are returned.
     */
    scope?: string;
    /**
     * The field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Floodlightactivities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.floodlightActivities.delete
     * @desc Deletes an existing floodlight activity.
     * @alias dfareporting.floodlightActivities.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Floodlightactivities$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Floodlightactivities$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Floodlightactivities$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivities.generatetag
     * @desc Generates a tag for a floodlight activity.
     * @alias dfareporting.floodlightActivities.generatetag
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.floodlightActivityId Floodlight activity ID for which we want to generate a tag.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generatetag(
      params?: Params$Resource$Floodlightactivities$Generatetag,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivitiesGenerateTagResponse>;
    generatetag(
      params: Params$Resource$Floodlightactivities$Generatetag,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>,
      callback: BodyResponseCallback<
        Schema$FloodlightActivitiesGenerateTagResponse
      >
    ): void;
    generatetag(
      params: Params$Resource$Floodlightactivities$Generatetag,
      callback: BodyResponseCallback<
        Schema$FloodlightActivitiesGenerateTagResponse
      >
    ): void;
    generatetag(
      callback: BodyResponseCallback<
        Schema$FloodlightActivitiesGenerateTagResponse
      >
    ): void;
    generatetag(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Generatetag
        | BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivitiesGenerateTagResponse>,
      callback?: BodyResponseCallback<
        Schema$FloodlightActivitiesGenerateTagResponse
      >
    ): void | GaxiosPromise<Schema$FloodlightActivitiesGenerateTagResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Generatetag;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Generatetag;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities/generatetag'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivitiesGenerateTagResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$FloodlightActivitiesGenerateTagResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.floodlightActivities.get
     * @desc Gets one floodlight activity by ID.
     * @alias dfareporting.floodlightActivities.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Floodlightactivities$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivity>;
    get(
      params: Params$Resource$Floodlightactivities$Get,
      options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    get(
      params: Params$Resource$Floodlightactivities$Get,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    get(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Get
        | BodyResponseCallback<Schema$FloodlightActivity>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivity>,
      callback?: BodyResponseCallback<Schema$FloodlightActivity>
    ): void | GaxiosPromise<Schema$FloodlightActivity> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivity>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivities.insert
     * @desc Inserts a new floodlight activity.
     * @alias dfareporting.floodlightActivities.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivity} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Floodlightactivities$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivity>;
    insert(
      params: Params$Resource$Floodlightactivities$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    insert(
      params: Params$Resource$Floodlightactivities$Insert,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    insert(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Insert
        | BodyResponseCallback<Schema$FloodlightActivity>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivity>,
      callback?: BodyResponseCallback<Schema$FloodlightActivity>
    ): void | GaxiosPromise<Schema$FloodlightActivity> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivity>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivities.list
     * @desc Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
     * @alias dfareporting.floodlightActivities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.floodlightActivityGroupIds Select only floodlight activities with the specified floodlight activity group IDs.
     * @param {string=} params.floodlightActivityGroupName Select only floodlight activities with the specified floodlight activity group name.
     * @param {string=} params.floodlightActivityGroupTagString Select only floodlight activities with the specified floodlight activity group tag string.
     * @param {string=} params.floodlightActivityGroupType Select only floodlight activities with the specified floodlight activity group type.
     * @param {string=} params.floodlightConfigurationId Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.ids Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.tagString Select only floodlight activities with the specified tag string.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Floodlightactivities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivitiesListResponse>;
    list(
      params: Params$Resource$Floodlightactivities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivitiesListResponse>,
      callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>
    ): void;
    list(
      params: Params$Resource$Floodlightactivities$List,
      callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$List
        | BodyResponseCallback<Schema$FloodlightActivitiesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivitiesListResponse>,
      callback?: BodyResponseCallback<Schema$FloodlightActivitiesListResponse>
    ): void | GaxiosPromise<Schema$FloodlightActivitiesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivitiesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$FloodlightActivitiesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.floodlightActivities.patch
     * @desc Updates an existing floodlight activity. This method supports patch semantics.
     * @alias dfareporting.floodlightActivities.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivity} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Floodlightactivities$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivity>;
    patch(
      params: Params$Resource$Floodlightactivities$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    patch(
      params: Params$Resource$Floodlightactivities$Patch,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Patch
        | BodyResponseCallback<Schema$FloodlightActivity>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivity>,
      callback?: BodyResponseCallback<Schema$FloodlightActivity>
    ): void | GaxiosPromise<Schema$FloodlightActivity> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivity>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivities.update
     * @desc Updates an existing floodlight activity.
     * @alias dfareporting.floodlightActivities.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivity} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Floodlightactivities$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivity>;
    update(
      params: Params$Resource$Floodlightactivities$Update,
      options: MethodOptions | BodyResponseCallback<Schema$FloodlightActivity>,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    update(
      params: Params$Resource$Floodlightactivities$Update,
      callback: BodyResponseCallback<Schema$FloodlightActivity>
    ): void;
    update(callback: BodyResponseCallback<Schema$FloodlightActivity>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivities$Update
        | BodyResponseCallback<Schema$FloodlightActivity>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivity>,
      callback?: BodyResponseCallback<Schema$FloodlightActivity>
    ): void | GaxiosPromise<Schema$FloodlightActivity> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivities$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivities$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivity>(parameters);
      }
    }
  }

  export interface Params$Resource$Floodlightactivities$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightactivities$Generatetag
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity ID for which we want to generate a tag.
     */
    floodlightActivityId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightactivities$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightactivities$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivity;
  }
  export interface Params$Resource$Floodlightactivities$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    advertiserId?: string;
    /**
     * Select only floodlight activities with the specified floodlight activity group IDs.
     */
    floodlightActivityGroupIds?: string[];
    /**
     * Select only floodlight activities with the specified floodlight activity group name.
     */
    floodlightActivityGroupName?: string;
    /**
     * Select only floodlight activities with the specified floodlight activity group tag string.
     */
    floodlightActivityGroupTagString?: string;
    /**
     * Select only floodlight activities with the specified floodlight activity group type.
     */
    floodlightActivityGroupType?: string;
    /**
     * Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    floodlightConfigurationId?: string;
    /**
     * Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only floodlight activities with the specified tag string.
     */
    tagString?: string;
  }
  export interface Params$Resource$Floodlightactivities$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivity;
  }
  export interface Params$Resource$Floodlightactivities$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivity;
  }

  export class Resource$Floodlightactivitygroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.floodlightActivityGroups.get
     * @desc Gets one floodlight activity group by ID.
     * @alias dfareporting.floodlightActivityGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity Group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Floodlightactivitygroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivityGroup>;
    get(
      params: Params$Resource$Floodlightactivitygroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    get(
      params: Params$Resource$Floodlightactivitygroups$Get,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivitygroups$Get
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback?: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void | GaxiosPromise<Schema$FloodlightActivityGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivitygroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivitygroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivityGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivityGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivityGroup>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivityGroups.insert
     * @desc Inserts a new floodlight activity group.
     * @alias dfareporting.floodlightActivityGroups.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivityGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Floodlightactivitygroups$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivityGroup>;
    insert(
      params: Params$Resource$Floodlightactivitygroups$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    insert(
      params: Params$Resource$Floodlightactivitygroups$Insert,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    insert(
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivitygroups$Insert
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback?: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void | GaxiosPromise<Schema$FloodlightActivityGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivitygroups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivitygroups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivityGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivityGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivityGroup>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivityGroups.list
     * @desc Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
     * @alias dfareporting.floodlightActivityGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.floodlightConfigurationId Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
     * @param {string=} params.ids Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.type Select only floodlight activity groups with the specified floodlight activity group type.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Floodlightactivitygroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivityGroupsListResponse>;
    list(
      params: Params$Resource$Floodlightactivitygroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>,
      callback: BodyResponseCallback<
        Schema$FloodlightActivityGroupsListResponse
      >
    ): void;
    list(
      params: Params$Resource$Floodlightactivitygroups$List,
      callback: BodyResponseCallback<
        Schema$FloodlightActivityGroupsListResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$FloodlightActivityGroupsListResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivitygroups$List
        | BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroupsListResponse>,
      callback?: BodyResponseCallback<
        Schema$FloodlightActivityGroupsListResponse
      >
    ): void | GaxiosPromise<Schema$FloodlightActivityGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivitygroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivitygroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivityGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivityGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$FloodlightActivityGroupsListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.floodlightActivityGroups.patch
     * @desc Updates an existing floodlight activity group. This method supports patch semantics.
     * @alias dfareporting.floodlightActivityGroups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight activity Group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivityGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Floodlightactivitygroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivityGroup>;
    patch(
      params: Params$Resource$Floodlightactivitygroups$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    patch(
      params: Params$Resource$Floodlightactivitygroups$Patch,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FloodlightActivityGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivitygroups$Patch
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback?: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void | GaxiosPromise<Schema$FloodlightActivityGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivitygroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivitygroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivityGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivityGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivityGroup>(parameters);
      }
    }

    /**
     * dfareporting.floodlightActivityGroups.update
     * @desc Updates an existing floodlight activity group.
     * @alias dfareporting.floodlightActivityGroups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightActivityGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Floodlightactivitygroups$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightActivityGroup>;
    update(
      params: Params$Resource$Floodlightactivitygroups$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    update(
      params: Params$Resource$Floodlightactivitygroups$Update,
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Floodlightactivitygroups$Update
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightActivityGroup>,
      callback?: BodyResponseCallback<Schema$FloodlightActivityGroup>
    ): void | GaxiosPromise<Schema$FloodlightActivityGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightactivitygroups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightactivitygroups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightActivityGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightActivityGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightActivityGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Floodlightactivitygroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity Group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightactivitygroups$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivityGroup;
  }
  export interface Params$Resource$Floodlightactivitygroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     */
    advertiserId?: string;
    /**
     * Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
     */
    floodlightConfigurationId?: string;
    /**
     * Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only floodlight activity groups with the specified floodlight activity group type.
     */
    type?: string;
  }
  export interface Params$Resource$Floodlightactivitygroups$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight activity Group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivityGroup;
  }
  export interface Params$Resource$Floodlightactivitygroups$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightActivityGroup;
  }

  export class Resource$Floodlightconfigurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.floodlightConfigurations.get
     * @desc Gets one floodlight configuration by ID.
     * @alias dfareporting.floodlightConfigurations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight configuration ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Floodlightconfigurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightConfiguration>;
    get(
      params: Params$Resource$Floodlightconfigurations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    get(
      params: Params$Resource$Floodlightconfigurations$Get,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    get(callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Floodlightconfigurations$Get
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback?: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void | GaxiosPromise<Schema$FloodlightConfiguration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightconfigurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightconfigurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightConfigurations/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightConfiguration>(parameters);
      }
    }

    /**
     * dfareporting.floodlightConfigurations.list
     * @desc Retrieves a list of floodlight configurations, possibly filtered.
     * @alias dfareporting.floodlightConfigurations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Floodlightconfigurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightConfigurationsListResponse>;
    list(
      params: Params$Resource$Floodlightconfigurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>,
      callback: BodyResponseCallback<
        Schema$FloodlightConfigurationsListResponse
      >
    ): void;
    list(
      params: Params$Resource$Floodlightconfigurations$List,
      callback: BodyResponseCallback<
        Schema$FloodlightConfigurationsListResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$FloodlightConfigurationsListResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Floodlightconfigurations$List
        | BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfigurationsListResponse>,
      callback?: BodyResponseCallback<
        Schema$FloodlightConfigurationsListResponse
      >
    ): void | GaxiosPromise<Schema$FloodlightConfigurationsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightconfigurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightconfigurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightConfigurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightConfigurationsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$FloodlightConfigurationsListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.floodlightConfigurations.patch
     * @desc Updates an existing floodlight configuration. This method supports patch semantics.
     * @alias dfareporting.floodlightConfigurations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Floodlight configuration ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Floodlightconfigurations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightConfiguration>;
    patch(
      params: Params$Resource$Floodlightconfigurations$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    patch(
      params: Params$Resource$Floodlightconfigurations$Patch,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    patch(callback: BodyResponseCallback<Schema$FloodlightConfiguration>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Floodlightconfigurations$Patch
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback?: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void | GaxiosPromise<Schema$FloodlightConfiguration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightconfigurations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightconfigurations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightConfigurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightConfiguration>(parameters);
      }
    }

    /**
     * dfareporting.floodlightConfigurations.update
     * @desc Updates an existing floodlight configuration.
     * @alias dfareporting.floodlightConfigurations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().FloodlightConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Floodlightconfigurations$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FloodlightConfiguration>;
    update(
      params: Params$Resource$Floodlightconfigurations$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    update(
      params: Params$Resource$Floodlightconfigurations$Update,
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    update(
      callback: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Floodlightconfigurations$Update
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$FloodlightConfiguration>,
      callback?: BodyResponseCallback<Schema$FloodlightConfiguration>
    ): void | GaxiosPromise<Schema$FloodlightConfiguration> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Floodlightconfigurations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Floodlightconfigurations$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/floodlightConfigurations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FloodlightConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FloodlightConfiguration>(parameters);
      }
    }
  }

  export interface Params$Resource$Floodlightconfigurations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight configuration ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightconfigurations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
     */
    ids?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Floodlightconfigurations$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Floodlight configuration ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightConfiguration;
  }
  export interface Params$Resource$Floodlightconfigurations$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FloodlightConfiguration;
  }

  export class Resource$Inventoryitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.inventoryItems.get
     * @desc Gets one inventory item by ID.
     * @alias dfareporting.inventoryItems.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Inventory item ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for order documents.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Inventoryitems$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InventoryItem>;
    get(
      params: Params$Resource$Inventoryitems$Get,
      options: MethodOptions | BodyResponseCallback<Schema$InventoryItem>,
      callback: BodyResponseCallback<Schema$InventoryItem>
    ): void;
    get(
      params: Params$Resource$Inventoryitems$Get,
      callback: BodyResponseCallback<Schema$InventoryItem>
    ): void;
    get(callback: BodyResponseCallback<Schema$InventoryItem>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Inventoryitems$Get
        | BodyResponseCallback<Schema$InventoryItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InventoryItem>,
      callback?: BodyResponseCallback<Schema$InventoryItem>
    ): void | GaxiosPromise<Schema$InventoryItem> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inventoryitems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inventoryitems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId', 'id'],
        pathParams: ['id', 'profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InventoryItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InventoryItem>(parameters);
      }
    }

    /**
     * dfareporting.inventoryItems.list
     * @desc Retrieves a list of inventory items, possibly filtered. This method supports paging.
     * @alias dfareporting.inventoryItems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only inventory items with these IDs.
     * @param {boolean=} params.inPlan Select only inventory items that are in plan.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.orderId Select only inventory items that belong to specified orders.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for order documents.
     * @param {string=} params.siteId Select only inventory items that are associated with these sites.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.type Select only inventory items with this type.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Inventoryitems$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InventoryItemsListResponse>;
    list(
      params: Params$Resource$Inventoryitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InventoryItemsListResponse>,
      callback: BodyResponseCallback<Schema$InventoryItemsListResponse>
    ): void;
    list(
      params: Params$Resource$Inventoryitems$List,
      callback: BodyResponseCallback<Schema$InventoryItemsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$InventoryItemsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Inventoryitems$List
        | BodyResponseCallback<Schema$InventoryItemsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$InventoryItemsListResponse>,
      callback?: BodyResponseCallback<Schema$InventoryItemsListResponse>
    ): void | GaxiosPromise<Schema$InventoryItemsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Inventoryitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Inventoryitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/inventoryItems'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId'],
        pathParams: ['profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InventoryItemsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$InventoryItemsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Inventoryitems$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Inventory item ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for order documents.
     */
    projectId?: string;
  }
  export interface Params$Resource$Inventoryitems$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only inventory items with these IDs.
     */
    ids?: string[];
    /**
     * Select only inventory items that are in plan.
     */
    inPlan?: boolean;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only inventory items that belong to specified orders.
     */
    orderId?: string[];
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for order documents.
     */
    projectId?: string;
    /**
     * Select only inventory items that are associated with these sites.
     */
    siteId?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only inventory items with this type.
     */
    type?: string;
  }

  export class Resource$Languages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.languages.list
     * @desc Retrieves a list of languages.
     * @alias dfareporting.languages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Languages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LanguagesListResponse>;
    list(
      params: Params$Resource$Languages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LanguagesListResponse>,
      callback: BodyResponseCallback<Schema$LanguagesListResponse>
    ): void;
    list(
      params: Params$Resource$Languages$List,
      callback: BodyResponseCallback<Schema$LanguagesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LanguagesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Languages$List
        | BodyResponseCallback<Schema$LanguagesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LanguagesListResponse>,
      callback?: BodyResponseCallback<Schema$LanguagesListResponse>
    ): void | GaxiosPromise<Schema$LanguagesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Languages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Languages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/languages'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LanguagesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LanguagesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Languages$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Metros {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.metros.list
     * @desc Retrieves a list of metros.
     * @alias dfareporting.metros.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Metros$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MetrosListResponse>;
    list(
      params: Params$Resource$Metros$List,
      options: MethodOptions | BodyResponseCallback<Schema$MetrosListResponse>,
      callback: BodyResponseCallback<Schema$MetrosListResponse>
    ): void;
    list(
      params: Params$Resource$Metros$List,
      callback: BodyResponseCallback<Schema$MetrosListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$MetrosListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Metros$List
        | BodyResponseCallback<Schema$MetrosListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MetrosListResponse>,
      callback?: BodyResponseCallback<Schema$MetrosListResponse>
    ): void | GaxiosPromise<Schema$MetrosListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Metros$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metros$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/metros'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MetrosListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MetrosListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Metros$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Mobileapps {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.mobileApps.get
     * @desc Gets one mobile app by ID.
     * @alias dfareporting.mobileApps.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Mobile app ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Mobileapps$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileApp>;
    get(
      params: Params$Resource$Mobileapps$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MobileApp>,
      callback: BodyResponseCallback<Schema$MobileApp>
    ): void;
    get(
      params: Params$Resource$Mobileapps$Get,
      callback: BodyResponseCallback<Schema$MobileApp>
    ): void;
    get(callback: BodyResponseCallback<Schema$MobileApp>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Mobileapps$Get
        | BodyResponseCallback<Schema$MobileApp>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileApp>,
      callback?: BodyResponseCallback<Schema$MobileApp>
    ): void | GaxiosPromise<Schema$MobileApp> {
      let params = (paramsOrCallback || {}) as Params$Resource$Mobileapps$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobileapps$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/mobileApps/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileApp>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileApp>(parameters);
      }
    }

    /**
     * dfareporting.mobileApps.list
     * @desc Retrieves list of available mobile apps.
     * @alias dfareporting.mobileApps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.directories Select only apps from these directories.
     * @param {string=} params.ids Select only apps with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Mobileapps$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileAppsListResponse>;
    list(
      params: Params$Resource$Mobileapps$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileAppsListResponse>,
      callback: BodyResponseCallback<Schema$MobileAppsListResponse>
    ): void;
    list(
      params: Params$Resource$Mobileapps$List,
      callback: BodyResponseCallback<Schema$MobileAppsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$MobileAppsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mobileapps$List
        | BodyResponseCallback<Schema$MobileAppsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileAppsListResponse>,
      callback?: BodyResponseCallback<Schema$MobileAppsListResponse>
    ): void | GaxiosPromise<Schema$MobileAppsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Mobileapps$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobileapps$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/mobileApps'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileAppsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileAppsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Mobileapps$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Mobile app ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Mobileapps$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only apps from these directories.
     */
    directories?: string[];
    /**
     * Select only apps with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
     */
    searchString?: string;
  }

  export class Resource$Mobilecarriers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.mobileCarriers.get
     * @desc Gets one mobile carrier by ID.
     * @alias dfareporting.mobileCarriers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Mobile carrier ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Mobilecarriers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileCarrier>;
    get(
      params: Params$Resource$Mobilecarriers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MobileCarrier>,
      callback: BodyResponseCallback<Schema$MobileCarrier>
    ): void;
    get(
      params: Params$Resource$Mobilecarriers$Get,
      callback: BodyResponseCallback<Schema$MobileCarrier>
    ): void;
    get(callback: BodyResponseCallback<Schema$MobileCarrier>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Mobilecarriers$Get
        | BodyResponseCallback<Schema$MobileCarrier>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileCarrier>,
      callback?: BodyResponseCallback<Schema$MobileCarrier>
    ): void | GaxiosPromise<Schema$MobileCarrier> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobilecarriers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobilecarriers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/mobileCarriers/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileCarrier>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MobileCarrier>(parameters);
      }
    }

    /**
     * dfareporting.mobileCarriers.list
     * @desc Retrieves a list of mobile carriers.
     * @alias dfareporting.mobileCarriers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Mobilecarriers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MobileCarriersListResponse>;
    list(
      params: Params$Resource$Mobilecarriers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileCarriersListResponse>,
      callback: BodyResponseCallback<Schema$MobileCarriersListResponse>
    ): void;
    list(
      params: Params$Resource$Mobilecarriers$List,
      callback: BodyResponseCallback<Schema$MobileCarriersListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$MobileCarriersListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Mobilecarriers$List
        | BodyResponseCallback<Schema$MobileCarriersListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MobileCarriersListResponse>,
      callback?: BodyResponseCallback<Schema$MobileCarriersListResponse>
    ): void | GaxiosPromise<Schema$MobileCarriersListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Mobilecarriers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Mobilecarriers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/mobileCarriers'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MobileCarriersListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$MobileCarriersListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Mobilecarriers$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Mobile carrier ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Mobilecarriers$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Operatingsystems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.operatingSystems.get
     * @desc Gets one operating system by DART ID.
     * @alias dfareporting.operatingSystems.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dartId Operating system DART ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operatingsystems$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperatingSystem>;
    get(
      params: Params$Resource$Operatingsystems$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OperatingSystem>,
      callback: BodyResponseCallback<Schema$OperatingSystem>
    ): void;
    get(
      params: Params$Resource$Operatingsystems$Get,
      callback: BodyResponseCallback<Schema$OperatingSystem>
    ): void;
    get(callback: BodyResponseCallback<Schema$OperatingSystem>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operatingsystems$Get
        | BodyResponseCallback<Schema$OperatingSystem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystem>,
      callback?: BodyResponseCallback<Schema$OperatingSystem>
    ): void | GaxiosPromise<Schema$OperatingSystem> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operatingsystems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operatingsystems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/operatingSystems/{dartId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'dartId'],
        pathParams: ['dartId', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperatingSystem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperatingSystem>(parameters);
      }
    }

    /**
     * dfareporting.operatingSystems.list
     * @desc Retrieves a list of operating systems.
     * @alias dfareporting.operatingSystems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Operatingsystems$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperatingSystemsListResponse>;
    list(
      params: Params$Resource$Operatingsystems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemsListResponse>,
      callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>
    ): void;
    list(
      params: Params$Resource$Operatingsystems$List,
      callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$OperatingSystemsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operatingsystems$List
        | BodyResponseCallback<Schema$OperatingSystemsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemsListResponse>,
      callback?: BodyResponseCallback<Schema$OperatingSystemsListResponse>
    ): void | GaxiosPromise<Schema$OperatingSystemsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operatingsystems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operatingsystems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/operatingSystems'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperatingSystemsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$OperatingSystemsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Operatingsystems$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Operating system DART ID.
     */
    dartId?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Operatingsystems$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Operatingsystemversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.operatingSystemVersions.get
     * @desc Gets one operating system version by ID.
     * @alias dfareporting.operatingSystemVersions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Operating system version ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Operatingsystemversions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperatingSystemVersion>;
    get(
      params: Params$Resource$Operatingsystemversions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemVersion>,
      callback: BodyResponseCallback<Schema$OperatingSystemVersion>
    ): void;
    get(
      params: Params$Resource$Operatingsystemversions$Get,
      callback: BodyResponseCallback<Schema$OperatingSystemVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$OperatingSystemVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operatingsystemversions$Get
        | BodyResponseCallback<Schema$OperatingSystemVersion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemVersion>,
      callback?: BodyResponseCallback<Schema$OperatingSystemVersion>
    ): void | GaxiosPromise<Schema$OperatingSystemVersion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operatingsystemversions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operatingsystemversions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/operatingSystemVersions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperatingSystemVersion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperatingSystemVersion>(parameters);
      }
    }

    /**
     * dfareporting.operatingSystemVersions.list
     * @desc Retrieves a list of operating system versions.
     * @alias dfareporting.operatingSystemVersions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Operatingsystemversions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperatingSystemVersionsListResponse>;
    list(
      params: Params$Resource$Operatingsystemversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>,
      callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>
    ): void;
    list(
      params: Params$Resource$Operatingsystemversions$List,
      callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operatingsystemversions$List
        | BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OperatingSystemVersionsListResponse>,
      callback?: BodyResponseCallback<
        Schema$OperatingSystemVersionsListResponse
      >
    ): void | GaxiosPromise<Schema$OperatingSystemVersionsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operatingsystemversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operatingsystemversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/operatingSystemVersions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperatingSystemVersionsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$OperatingSystemVersionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Operatingsystemversions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Operating system version ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Operatingsystemversions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Orderdocuments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.orderDocuments.get
     * @desc Gets one order document by ID.
     * @alias dfareporting.orderDocuments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Order document ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for order documents.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Orderdocuments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderDocument>;
    get(
      params: Params$Resource$Orderdocuments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OrderDocument>,
      callback: BodyResponseCallback<Schema$OrderDocument>
    ): void;
    get(
      params: Params$Resource$Orderdocuments$Get,
      callback: BodyResponseCallback<Schema$OrderDocument>
    ): void;
    get(callback: BodyResponseCallback<Schema$OrderDocument>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Orderdocuments$Get
        | BodyResponseCallback<Schema$OrderDocument>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderDocument>,
      callback?: BodyResponseCallback<Schema$OrderDocument>
    ): void | GaxiosPromise<Schema$OrderDocument> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderdocuments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderdocuments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId', 'id'],
        pathParams: ['id', 'profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderDocument>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrderDocument>(parameters);
      }
    }

    /**
     * dfareporting.orderDocuments.list
     * @desc Retrieves a list of order documents, possibly filtered. This method supports paging.
     * @alias dfareporting.orderDocuments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.approved Select only order documents that have been approved by at least one user.
     * @param {string=} params.ids Select only order documents with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.orderId Select only order documents for specified orders.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for order documents.
     * @param {string=} params.searchString Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
     * @param {string=} params.siteId Select only order documents that are associated with these sites.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Orderdocuments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrderDocumentsListResponse>;
    list(
      params: Params$Resource$Orderdocuments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderDocumentsListResponse>,
      callback: BodyResponseCallback<Schema$OrderDocumentsListResponse>
    ): void;
    list(
      params: Params$Resource$Orderdocuments$List,
      callback: BodyResponseCallback<Schema$OrderDocumentsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$OrderDocumentsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Orderdocuments$List
        | BodyResponseCallback<Schema$OrderDocumentsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OrderDocumentsListResponse>,
      callback?: BodyResponseCallback<Schema$OrderDocumentsListResponse>
    ): void | GaxiosPromise<Schema$OrderDocumentsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Orderdocuments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orderdocuments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/orderDocuments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId'],
        pathParams: ['profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrderDocumentsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$OrderDocumentsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Orderdocuments$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Order document ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for order documents.
     */
    projectId?: string;
  }
  export interface Params$Resource$Orderdocuments$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only order documents that have been approved by at least one user.
     */
    approved?: boolean;
    /**
     * Select only order documents with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only order documents for specified orders.
     */
    orderId?: string[];
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for order documents.
     */
    projectId?: string;
    /**
     * Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
     */
    searchString?: string;
    /**
     * Select only order documents that are associated with these sites.
     */
    siteId?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Orders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.orders.get
     * @desc Gets one order by ID.
     * @alias dfareporting.orders.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Order ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for orders.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Orders$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Order>;
    get(
      params: Params$Resource$Orders$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Order>,
      callback: BodyResponseCallback<Schema$Order>
    ): void;
    get(
      params: Params$Resource$Orders$Get,
      callback: BodyResponseCallback<Schema$Order>
    ): void;
    get(callback: BodyResponseCallback<Schema$Order>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Orders$Get
        | BodyResponseCallback<Schema$Order>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Order>,
      callback?: BodyResponseCallback<Schema$Order>
    ): void | GaxiosPromise<Schema$Order> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/orders/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId', 'id'],
        pathParams: ['id', 'profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Order>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Order>(parameters);
      }
    }

    /**
     * dfareporting.orders.list
     * @desc Retrieves a list of orders, possibly filtered. This method supports paging.
     * @alias dfareporting.orders.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only orders with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.projectId Project ID for orders.
     * @param {string=} params.searchString Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
     * @param {string=} params.siteId Select only orders that are associated with these site IDs.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Orders$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OrdersListResponse>;
    list(
      params: Params$Resource$Orders$List,
      options: MethodOptions | BodyResponseCallback<Schema$OrdersListResponse>,
      callback: BodyResponseCallback<Schema$OrdersListResponse>
    ): void;
    list(
      params: Params$Resource$Orders$List,
      callback: BodyResponseCallback<Schema$OrdersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OrdersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Orders$List
        | BodyResponseCallback<Schema$OrdersListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$OrdersListResponse>,
      callback?: BodyResponseCallback<Schema$OrdersListResponse>
    ): void | GaxiosPromise<Schema$OrdersListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Orders$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Orders$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{projectId}/orders'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'projectId'],
        pathParams: ['profileId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OrdersListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OrdersListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Orders$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Order ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for orders.
     */
    projectId?: string;
  }
  export interface Params$Resource$Orders$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only orders with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Project ID for orders.
     */
    projectId?: string;
    /**
     * Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
     */
    searchString?: string;
    /**
     * Select only orders that are associated with these site IDs.
     */
    siteId?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Placementgroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.placementGroups.get
     * @desc Gets one placement group by ID.
     * @alias dfareporting.placementGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Placementgroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementGroup>;
    get(
      params: Params$Resource$Placementgroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    get(
      params: Params$Resource$Placementgroups$Get,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Placementgroups$Get
        | BodyResponseCallback<Schema$PlacementGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroup>,
      callback?: BodyResponseCallback<Schema$PlacementGroup>
    ): void | GaxiosPromise<Schema$PlacementGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementgroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementgroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementGroup>(parameters);
      }
    }

    /**
     * dfareporting.placementGroups.insert
     * @desc Inserts a new placement group.
     * @alias dfareporting.placementGroups.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Placementgroups$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementGroup>;
    insert(
      params: Params$Resource$Placementgroups$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    insert(
      params: Params$Resource$Placementgroups$Insert,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Placementgroups$Insert
        | BodyResponseCallback<Schema$PlacementGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroup>,
      callback?: BodyResponseCallback<Schema$PlacementGroup>
    ): void | GaxiosPromise<Schema$PlacementGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementgroups$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementgroups$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementGroup>(parameters);
      }
    }

    /**
     * dfareporting.placementGroups.list
     * @desc Retrieves a list of placement groups, possibly filtered. This method supports paging.
     * @alias dfareporting.placementGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only placement groups that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
     * @param {string=} params.campaignIds Select only placement groups that belong to these campaigns.
     * @param {string=} params.contentCategoryIds Select only placement groups that are associated with these content categories.
     * @param {string=} params.directorySiteIds Select only placement groups that are associated with these directory sites.
     * @param {string=} params.ids Select only placement groups with these IDs.
     * @param {string=} params.maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.placementGroupType Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     * @param {string=} params.placementStrategyIds Select only placement groups that are associated with these placement strategies.
     * @param {string=} params.pricingTypes Select only placement groups with these pricing types.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     * @param {string=} params.siteIds Select only placement groups that are associated with these sites.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Placementgroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementGroupsListResponse>;
    list(
      params: Params$Resource$Placementgroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroupsListResponse>,
      callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>
    ): void;
    list(
      params: Params$Resource$Placementgroups$List,
      callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$PlacementGroupsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Placementgroups$List
        | BodyResponseCallback<Schema$PlacementGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroupsListResponse>,
      callback?: BodyResponseCallback<Schema$PlacementGroupsListResponse>
    ): void | GaxiosPromise<Schema$PlacementGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementgroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementgroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlacementGroupsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.placementGroups.patch
     * @desc Updates an existing placement group. This method supports patch semantics.
     * @alias dfareporting.placementGroups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Placementgroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementGroup>;
    patch(
      params: Params$Resource$Placementgroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    patch(
      params: Params$Resource$Placementgroups$Patch,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Placementgroups$Patch
        | BodyResponseCallback<Schema$PlacementGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroup>,
      callback?: BodyResponseCallback<Schema$PlacementGroup>
    ): void | GaxiosPromise<Schema$PlacementGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementgroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementgroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementGroup>(parameters);
      }
    }

    /**
     * dfareporting.placementGroups.update
     * @desc Updates an existing placement group.
     * @alias dfareporting.placementGroups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementGroup} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Placementgroups$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementGroup>;
    update(
      params: Params$Resource$Placementgroups$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementGroup>,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    update(
      params: Params$Resource$Placementgroups$Update,
      callback: BodyResponseCallback<Schema$PlacementGroup>
    ): void;
    update(callback: BodyResponseCallback<Schema$PlacementGroup>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Placementgroups$Update
        | BodyResponseCallback<Schema$PlacementGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementGroup>,
      callback?: BodyResponseCallback<Schema$PlacementGroup>
    ): void | GaxiosPromise<Schema$PlacementGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementgroups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementgroups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Placementgroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Placementgroups$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementGroup;
  }
  export interface Params$Resource$Placementgroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only placement groups that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only archived placements. Don't set this field to select both archived and non-archived placements.
     */
    archived?: boolean;
    /**
     * Select only placement groups that belong to these campaigns.
     */
    campaignIds?: string[];
    /**
     * Select only placement groups that are associated with these content categories.
     */
    contentCategoryIds?: string[];
    /**
     * Select only placement groups that are associated with these directory sites.
     */
    directorySiteIds?: string[];
    /**
     * Select only placement groups with these IDs.
     */
    ids?: string[];
    /**
     * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxEndDate?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxStartDate?: string;
    /**
     * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    minEndDate?: string;
    /**
     * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    minStartDate?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
     */
    placementGroupType?: string;
    /**
     * Select only placement groups that are associated with these placement strategies.
     */
    placementStrategyIds?: string[];
    /**
     * Select only placement groups with these pricing types.
     */
    pricingTypes?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
     */
    searchString?: string;
    /**
     * Select only placement groups that are associated with these sites.
     */
    siteIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Placementgroups$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementGroup;
  }
  export interface Params$Resource$Placementgroups$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementGroup;
  }

  export class Resource$Placements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.placements.generatetags
     * @desc Generates tags for a placement.
     * @alias dfareporting.placements.generatetags
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.campaignId Generate placements belonging to this campaign. This is a required field.
     * @param {string=} params.placementIds Generate tags for these placements.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.tagFormats Tag formats to generate for these placements.  Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    generatetags(
      params?: Params$Resource$Placements$Generatetags,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementsGenerateTagsResponse>;
    generatetags(
      params: Params$Resource$Placements$Generatetags,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>,
      callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>
    ): void;
    generatetags(
      params: Params$Resource$Placements$Generatetags,
      callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>
    ): void;
    generatetags(
      callback: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>
    ): void;
    generatetags(
      paramsOrCallback?:
        | Params$Resource$Placements$Generatetags
        | BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>,
      callback?: BodyResponseCallback<Schema$PlacementsGenerateTagsResponse>
    ): void | GaxiosPromise<Schema$PlacementsGenerateTagsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placements$Generatetags;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$Generatetags;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placements/generatetags'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementsGenerateTagsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlacementsGenerateTagsResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.placements.get
     * @desc Gets one placement by ID.
     * @alias dfareporting.placements.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Placements$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Placement>;
    get(
      params: Params$Resource$Placements$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Placement>,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    get(
      params: Params$Resource$Placements$Get,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    get(callback: BodyResponseCallback<Schema$Placement>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Placements$Get
        | BodyResponseCallback<Schema$Placement>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Placement>,
      callback?: BodyResponseCallback<Schema$Placement>
    ): void | GaxiosPromise<Schema$Placement> {
      let params = (paramsOrCallback || {}) as Params$Resource$Placements$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placements/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Placement>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Placement>(parameters);
      }
    }

    /**
     * dfareporting.placements.insert
     * @desc Inserts a new placement.
     * @alias dfareporting.placements.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Placement} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Placements$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Placement>;
    insert(
      params: Params$Resource$Placements$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Placement>,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    insert(
      params: Params$Resource$Placements$Insert,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Placement>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Placements$Insert
        | BodyResponseCallback<Schema$Placement>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Placement>,
      callback?: BodyResponseCallback<Schema$Placement>
    ): void | GaxiosPromise<Schema$Placement> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placements$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/placements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Placement>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Placement>(parameters);
      }
    }

    /**
     * dfareporting.placements.list
     * @desc Retrieves a list of placements, possibly filtered. This method supports paging.
     * @alias dfareporting.placements.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only placements that belong to these advertisers.
     * @param {boolean=} params.archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
     * @param {string=} params.campaignIds Select only placements that belong to these campaigns.
     * @param {string=} params.compatibilities Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     * @param {string=} params.contentCategoryIds Select only placements that are associated with these content categories.
     * @param {string=} params.directorySiteIds Select only placements that are associated with these directory sites.
     * @param {string=} params.groupIds Select only placements that belong to these placement groups.
     * @param {string=} params.ids Select only placements with these IDs.
     * @param {string=} params.maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string=} params.paymentSource Select only placements with this payment source.
     * @param {string=} params.placementStrategyIds Select only placements that are associated with these placement strategies.
     * @param {string=} params.pricingTypes Select only placements with these pricing types.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
     * @param {string=} params.siteIds Select only placements that are associated with these sites.
     * @param {string=} params.sizeIds Select only placements that are associated with these sizes.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Placements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementsListResponse>;
    list(
      params: Params$Resource$Placements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementsListResponse>,
      callback: BodyResponseCallback<Schema$PlacementsListResponse>
    ): void;
    list(
      params: Params$Resource$Placements$List,
      callback: BodyResponseCallback<Schema$PlacementsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlacementsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Placements$List
        | BodyResponseCallback<Schema$PlacementsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementsListResponse>,
      callback?: BodyResponseCallback<Schema$PlacementsListResponse>
    ): void | GaxiosPromise<Schema$PlacementsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Placements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/placements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.placements.patch
     * @desc Updates an existing placement. This method supports patch semantics.
     * @alias dfareporting.placements.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Placement} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Placements$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Placement>;
    patch(
      params: Params$Resource$Placements$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Placement>,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    patch(
      params: Params$Resource$Placements$Patch,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Placement>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Placements$Patch
        | BodyResponseCallback<Schema$Placement>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Placement>,
      callback?: BodyResponseCallback<Schema$Placement>
    ): void | GaxiosPromise<Schema$Placement> {
      let params = (paramsOrCallback || {}) as Params$Resource$Placements$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/placements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Placement>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Placement>(parameters);
      }
    }

    /**
     * dfareporting.placements.update
     * @desc Updates an existing placement.
     * @alias dfareporting.placements.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Placement} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Placements$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Placement>;
    update(
      params: Params$Resource$Placements$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Placement>,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    update(
      params: Params$Resource$Placements$Update,
      callback: BodyResponseCallback<Schema$Placement>
    ): void;
    update(callback: BodyResponseCallback<Schema$Placement>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Placements$Update
        | BodyResponseCallback<Schema$Placement>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Placement>,
      callback?: BodyResponseCallback<Schema$Placement>
    ): void | GaxiosPromise<Schema$Placement> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placements$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placements$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/placements'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Placement>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Placement>(parameters);
      }
    }
  }

  export interface Params$Resource$Placements$Generatetags
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Generate placements belonging to this campaign. This is a required field.
     */
    campaignId?: string;
    /**
     * Generate tags for these placements.
     */
    placementIds?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Tag formats to generate for these placements.  Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
     */
    tagFormats?: string[];
  }
  export interface Params$Resource$Placements$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Placements$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Placement;
  }
  export interface Params$Resource$Placements$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only placements that belong to these advertisers.
     */
    advertiserIds?: string[];
    /**
     * Select only archived placements. Don't set this field to select both archived and non-archived placements.
     */
    archived?: boolean;
    /**
     * Select only placements that belong to these campaigns.
     */
    campaignIds?: string[];
    /**
     * Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
     */
    compatibilities?: string[];
    /**
     * Select only placements that are associated with these content categories.
     */
    contentCategoryIds?: string[];
    /**
     * Select only placements that are associated with these directory sites.
     */
    directorySiteIds?: string[];
    /**
     * Select only placements that belong to these placement groups.
     */
    groupIds?: string[];
    /**
     * Select only placements with these IDs.
     */
    ids?: string[];
    /**
     * Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxEndDate?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    maxStartDate?: string;
    /**
     * Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
     */
    minEndDate?: string;
    /**
     * Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
     */
    minStartDate?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Select only placements with this payment source.
     */
    paymentSource?: string;
    /**
     * Select only placements that are associated with these placement strategies.
     */
    placementStrategyIds?: string[];
    /**
     * Select only placements with these pricing types.
     */
    pricingTypes?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
     */
    searchString?: string;
    /**
     * Select only placements that are associated with these sites.
     */
    siteIds?: string[];
    /**
     * Select only placements that are associated with these sizes.
     */
    sizeIds?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Placements$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Placement;
  }
  export interface Params$Resource$Placements$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Placement;
  }

  export class Resource$Placementstrategies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.placementStrategies.delete
     * @desc Deletes an existing placement strategy.
     * @alias dfareporting.placementStrategies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Placementstrategies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Placementstrategies$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Placementstrategies$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.placementStrategies.get
     * @desc Gets one placement strategy by ID.
     * @alias dfareporting.placementStrategies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Placementstrategies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementStrategy>;
    get(
      params: Params$Resource$Placementstrategies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    get(
      params: Params$Resource$Placementstrategies$Get,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$Get
        | BodyResponseCallback<Schema$PlacementStrategy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategy>,
      callback?: BodyResponseCallback<Schema$PlacementStrategy>
    ): void | GaxiosPromise<Schema$PlacementStrategy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementStrategy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementStrategy>(parameters);
      }
    }

    /**
     * dfareporting.placementStrategies.insert
     * @desc Inserts a new placement strategy.
     * @alias dfareporting.placementStrategies.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementStrategy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Placementstrategies$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementStrategy>;
    insert(
      params: Params$Resource$Placementstrategies$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    insert(
      params: Params$Resource$Placementstrategies$Insert,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$Insert
        | BodyResponseCallback<Schema$PlacementStrategy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategy>,
      callback?: BodyResponseCallback<Schema$PlacementStrategy>
    ): void | GaxiosPromise<Schema$PlacementStrategy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementStrategy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementStrategy>(parameters);
      }
    }

    /**
     * dfareporting.placementStrategies.list
     * @desc Retrieves a list of placement strategies, possibly filtered. This method supports paging.
     * @alias dfareporting.placementStrategies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only placement strategies with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Placementstrategies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementStrategiesListResponse>;
    list(
      params: Params$Resource$Placementstrategies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategiesListResponse>,
      callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>
    ): void;
    list(
      params: Params$Resource$Placementstrategies$List,
      callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$PlacementStrategiesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$List
        | BodyResponseCallback<Schema$PlacementStrategiesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategiesListResponse>,
      callback?: BodyResponseCallback<Schema$PlacementStrategiesListResponse>
    ): void | GaxiosPromise<Schema$PlacementStrategiesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementStrategiesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlacementStrategiesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.placementStrategies.patch
     * @desc Updates an existing placement strategy. This method supports patch semantics.
     * @alias dfareporting.placementStrategies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Placement strategy ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementStrategy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Placementstrategies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementStrategy>;
    patch(
      params: Params$Resource$Placementstrategies$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    patch(
      params: Params$Resource$Placementstrategies$Patch,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$Patch
        | BodyResponseCallback<Schema$PlacementStrategy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategy>,
      callback?: BodyResponseCallback<Schema$PlacementStrategy>
    ): void | GaxiosPromise<Schema$PlacementStrategy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementStrategy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementStrategy>(parameters);
      }
    }

    /**
     * dfareporting.placementStrategies.update
     * @desc Updates an existing placement strategy.
     * @alias dfareporting.placementStrategies.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().PlacementStrategy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Placementstrategies$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlacementStrategy>;
    update(
      params: Params$Resource$Placementstrategies$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PlacementStrategy>,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    update(
      params: Params$Resource$Placementstrategies$Update,
      callback: BodyResponseCallback<Schema$PlacementStrategy>
    ): void;
    update(callback: BodyResponseCallback<Schema$PlacementStrategy>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Placementstrategies$Update
        | BodyResponseCallback<Schema$PlacementStrategy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlacementStrategy>,
      callback?: BodyResponseCallback<Schema$PlacementStrategy>
    ): void | GaxiosPromise<Schema$PlacementStrategy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Placementstrategies$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Placementstrategies$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/placementStrategies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlacementStrategy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlacementStrategy>(parameters);
      }
    }
  }

  export interface Params$Resource$Placementstrategies$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement strategy ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Placementstrategies$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement strategy ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Placementstrategies$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementStrategy;
  }
  export interface Params$Resource$Placementstrategies$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only placement strategies with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Placementstrategies$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Placement strategy ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementStrategy;
  }
  export interface Params$Resource$Placementstrategies$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlacementStrategy;
  }

  export class Resource$Platformtypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.platformTypes.get
     * @desc Gets one platform type by ID.
     * @alias dfareporting.platformTypes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Platform type ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Platformtypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlatformType>;
    get(
      params: Params$Resource$Platformtypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PlatformType>,
      callback: BodyResponseCallback<Schema$PlatformType>
    ): void;
    get(
      params: Params$Resource$Platformtypes$Get,
      callback: BodyResponseCallback<Schema$PlatformType>
    ): void;
    get(callback: BodyResponseCallback<Schema$PlatformType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Platformtypes$Get
        | BodyResponseCallback<Schema$PlatformType>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlatformType>,
      callback?: BodyResponseCallback<Schema$PlatformType>
    ): void | GaxiosPromise<Schema$PlatformType> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platformtypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platformtypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/platformTypes/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlatformType>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlatformType>(parameters);
      }
    }

    /**
     * dfareporting.platformTypes.list
     * @desc Retrieves a list of platform types.
     * @alias dfareporting.platformTypes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Platformtypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlatformTypesListResponse>;
    list(
      params: Params$Resource$Platformtypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlatformTypesListResponse>,
      callback: BodyResponseCallback<Schema$PlatformTypesListResponse>
    ): void;
    list(
      params: Params$Resource$Platformtypes$List,
      callback: BodyResponseCallback<Schema$PlatformTypesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$PlatformTypesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Platformtypes$List
        | BodyResponseCallback<Schema$PlatformTypesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlatformTypesListResponse>,
      callback?: BodyResponseCallback<Schema$PlatformTypesListResponse>
    ): void | GaxiosPromise<Schema$PlatformTypesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Platformtypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Platformtypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/platformTypes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlatformTypesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$PlatformTypesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Platformtypes$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Platform type ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Platformtypes$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Postalcodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.postalCodes.get
     * @desc Gets one postal code by ID.
     * @alias dfareporting.postalCodes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.code Postal code ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Postalcodes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostalCode>;
    get(
      params: Params$Resource$Postalcodes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PostalCode>,
      callback: BodyResponseCallback<Schema$PostalCode>
    ): void;
    get(
      params: Params$Resource$Postalcodes$Get,
      callback: BodyResponseCallback<Schema$PostalCode>
    ): void;
    get(callback: BodyResponseCallback<Schema$PostalCode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Postalcodes$Get
        | BodyResponseCallback<Schema$PostalCode>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PostalCode>,
      callback?: BodyResponseCallback<Schema$PostalCode>
    ): void | GaxiosPromise<Schema$PostalCode> {
      let params = (paramsOrCallback || {}) as Params$Resource$Postalcodes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Postalcodes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/postalCodes/{code}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'code'],
        pathParams: ['code', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PostalCode>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PostalCode>(parameters);
      }
    }

    /**
     * dfareporting.postalCodes.list
     * @desc Retrieves a list of postal codes.
     * @alias dfareporting.postalCodes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Postalcodes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PostalCodesListResponse>;
    list(
      params: Params$Resource$Postalcodes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PostalCodesListResponse>,
      callback: BodyResponseCallback<Schema$PostalCodesListResponse>
    ): void;
    list(
      params: Params$Resource$Postalcodes$List,
      callback: BodyResponseCallback<Schema$PostalCodesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PostalCodesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Postalcodes$List
        | BodyResponseCallback<Schema$PostalCodesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PostalCodesListResponse>,
      callback?: BodyResponseCallback<Schema$PostalCodesListResponse>
    ): void | GaxiosPromise<Schema$PostalCodesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Postalcodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Postalcodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/postalCodes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PostalCodesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PostalCodesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Postalcodes$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Postal code ID.
     */
    code?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Postalcodes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.projects.get
     * @desc Gets one project by ID.
     * @alias dfareporting.projects.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Project ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Project>;
    get(
      params: Params$Resource$Projects$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(
      params: Params$Resource$Projects$Get,
      callback: BodyResponseCallback<Schema$Project>
    ): void;
    get(callback: BodyResponseCallback<Schema$Project>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Get
        | BodyResponseCallback<Schema$Project>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Project>,
      callback?: BodyResponseCallback<Schema$Project>
    ): void | GaxiosPromise<Schema$Project> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/projects/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Project>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Project>(parameters);
      }
    }

    /**
     * dfareporting.projects.list
     * @desc Retrieves a list of projects, possibly filtered. This method supports paging.
     * @alias dfareporting.projects.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserIds Select only projects with these advertiser IDs.
     * @param {string=} params.ids Select only projects with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProjectsListResponse>;
    list(
      params: Params$Resource$Projects$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ProjectsListResponse>,
      callback: BodyResponseCallback<Schema$ProjectsListResponse>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      callback: BodyResponseCallback<Schema$ProjectsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProjectsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$List
        | BodyResponseCallback<Schema$ProjectsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProjectsListResponse>,
      callback?: BodyResponseCallback<Schema$ProjectsListResponse>
    ): void | GaxiosPromise<Schema$ProjectsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/projects'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProjectsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Projects$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only projects with these advertiser IDs.
     */
    advertiserIds?: string[];
    /**
     * Select only projects with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Regions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.regions.list
     * @desc Retrieves a list of regions.
     * @alias dfareporting.regions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Regions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RegionsListResponse>;
    list(
      params: Params$Resource$Regions$List,
      options: MethodOptions | BodyResponseCallback<Schema$RegionsListResponse>,
      callback: BodyResponseCallback<Schema$RegionsListResponse>
    ): void;
    list(
      params: Params$Resource$Regions$List,
      callback: BodyResponseCallback<Schema$RegionsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$RegionsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Regions$List
        | BodyResponseCallback<Schema$RegionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RegionsListResponse>,
      callback?: BodyResponseCallback<Schema$RegionsListResponse>
    ): void | GaxiosPromise<Schema$RegionsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Regions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Regions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/regions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RegionsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RegionsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Regions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Remarketinglists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.remarketingLists.get
     * @desc Gets one remarketing list by ID.
     * @alias dfareporting.remarketingLists.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Remarketing list ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Remarketinglists$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingList>;
    get(
      params: Params$Resource$Remarketinglists$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    get(
      params: Params$Resource$Remarketinglists$Get,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    get(callback: BodyResponseCallback<Schema$RemarketingList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Remarketinglists$Get
        | BodyResponseCallback<Schema$RemarketingList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingList>,
      callback?: BodyResponseCallback<Schema$RemarketingList>
    ): void | GaxiosPromise<Schema$RemarketingList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingLists/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingList>(parameters);
      }
    }

    /**
     * dfareporting.remarketingLists.insert
     * @desc Inserts a new remarketing list.
     * @alias dfareporting.remarketingLists.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().RemarketingList} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Remarketinglists$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingList>;
    insert(
      params: Params$Resource$Remarketinglists$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    insert(
      params: Params$Resource$Remarketinglists$Insert,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    insert(callback: BodyResponseCallback<Schema$RemarketingList>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Remarketinglists$Insert
        | BodyResponseCallback<Schema$RemarketingList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingList>,
      callback?: BodyResponseCallback<Schema$RemarketingList>
    ): void | GaxiosPromise<Schema$RemarketingList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglists$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglists$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingList>(parameters);
      }
    }

    /**
     * dfareporting.remarketingLists.list
     * @desc Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
     * @alias dfareporting.remarketingLists.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active or only inactive remarketing lists.
     * @param {string} params.advertiserId Select only remarketing lists owned by this advertiser.
     * @param {string=} params.floodlightActivityId Select only remarketing lists that have this floodlight activity ID.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Remarketinglists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingListsListResponse>;
    list(
      params: Params$Resource$Remarketinglists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListsListResponse>,
      callback: BodyResponseCallback<Schema$RemarketingListsListResponse>
    ): void;
    list(
      params: Params$Resource$Remarketinglists$List,
      callback: BodyResponseCallback<Schema$RemarketingListsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$RemarketingListsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Remarketinglists$List
        | BodyResponseCallback<Schema$RemarketingListsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListsListResponse>,
      callback?: BodyResponseCallback<Schema$RemarketingListsListResponse>
    ): void | GaxiosPromise<Schema$RemarketingListsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'advertiserId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingListsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$RemarketingListsListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.remarketingLists.patch
     * @desc Updates an existing remarketing list. This method supports patch semantics.
     * @alias dfareporting.remarketingLists.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Remarketing list ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().RemarketingList} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Remarketinglists$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingList>;
    patch(
      params: Params$Resource$Remarketinglists$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    patch(
      params: Params$Resource$Remarketinglists$Patch,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    patch(callback: BodyResponseCallback<Schema$RemarketingList>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Remarketinglists$Patch
        | BodyResponseCallback<Schema$RemarketingList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingList>,
      callback?: BodyResponseCallback<Schema$RemarketingList>
    ): void | GaxiosPromise<Schema$RemarketingList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglists$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglists$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingList>(parameters);
      }
    }

    /**
     * dfareporting.remarketingLists.update
     * @desc Updates an existing remarketing list.
     * @alias dfareporting.remarketingLists.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().RemarketingList} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Remarketinglists$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingList>;
    update(
      params: Params$Resource$Remarketinglists$Update,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingList>,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    update(
      params: Params$Resource$Remarketinglists$Update,
      callback: BodyResponseCallback<Schema$RemarketingList>
    ): void;
    update(callback: BodyResponseCallback<Schema$RemarketingList>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Remarketinglists$Update
        | BodyResponseCallback<Schema$RemarketingList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingList>,
      callback?: BodyResponseCallback<Schema$RemarketingList>
    ): void | GaxiosPromise<Schema$RemarketingList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglists$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglists$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingList>(parameters);
      }
    }
  }

  export interface Params$Resource$Remarketinglists$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Remarketing list ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Remarketinglists$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingList;
  }
  export interface Params$Resource$Remarketinglists$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active or only inactive remarketing lists.
     */
    active?: boolean;
    /**
     * Select only remarketing lists owned by this advertiser.
     */
    advertiserId?: string;
    /**
     * Select only remarketing lists that have this floodlight activity ID.
     */
    floodlightActivityId?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     */
    name?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Remarketinglists$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Remarketing list ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingList;
  }
  export interface Params$Resource$Remarketinglists$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingList;
  }

  export class Resource$Remarketinglistshares {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.remarketingListShares.get
     * @desc Gets one remarketing list share by remarketing list ID.
     * @alias dfareporting.remarketingListShares.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.remarketingListId Remarketing list ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Remarketinglistshares$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingListShare>;
    get(
      params: Params$Resource$Remarketinglistshares$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    get(
      params: Params$Resource$Remarketinglistshares$Get,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    get(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Remarketinglistshares$Get
        | BodyResponseCallback<Schema$RemarketingListShare>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback?: BodyResponseCallback<Schema$RemarketingListShare>
    ): void | GaxiosPromise<Schema$RemarketingListShare> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglistshares$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglistshares$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingListShares/{remarketingListId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'remarketingListId'],
        pathParams: ['profileId', 'remarketingListId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingListShare>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingListShare>(parameters);
      }
    }

    /**
     * dfareporting.remarketingListShares.patch
     * @desc Updates an existing remarketing list share. This method supports patch semantics.
     * @alias dfareporting.remarketingListShares.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string} params.remarketingListId Remarketing list ID.
     * @param {().RemarketingListShare} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Remarketinglistshares$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingListShare>;
    patch(
      params: Params$Resource$Remarketinglistshares$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    patch(
      params: Params$Resource$Remarketinglistshares$Patch,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    patch(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Remarketinglistshares$Patch
        | BodyResponseCallback<Schema$RemarketingListShare>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback?: BodyResponseCallback<Schema$RemarketingListShare>
    ): void | GaxiosPromise<Schema$RemarketingListShare> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglistshares$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglistshares$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingListShares'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'remarketingListId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingListShare>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingListShare>(parameters);
      }
    }

    /**
     * dfareporting.remarketingListShares.update
     * @desc Updates an existing remarketing list share.
     * @alias dfareporting.remarketingListShares.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().RemarketingListShare} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Remarketinglistshares$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingListShare>;
    update(
      params: Params$Resource$Remarketinglistshares$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    update(
      params: Params$Resource$Remarketinglistshares$Update,
      callback: BodyResponseCallback<Schema$RemarketingListShare>
    ): void;
    update(callback: BodyResponseCallback<Schema$RemarketingListShare>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Remarketinglistshares$Update
        | BodyResponseCallback<Schema$RemarketingListShare>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingListShare>,
      callback?: BodyResponseCallback<Schema$RemarketingListShare>
    ): void | GaxiosPromise<Schema$RemarketingListShare> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Remarketinglistshares$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Remarketinglistshares$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/remarketingListShares'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingListShare>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RemarketingListShare>(parameters);
      }
    }
  }

  export interface Params$Resource$Remarketinglistshares$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Remarketing list ID.
     */
    remarketingListId?: string;
  }
  export interface Params$Resource$Remarketinglistshares$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Remarketing list ID.
     */
    remarketingListId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingListShare;
  }
  export interface Params$Resource$Remarketinglistshares$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingListShare;
  }

  export class Resource$Reports {
    context: APIRequestContext;
    compatibleFields: Resource$Reports$Compatiblefields;
    files: Resource$Reports$Files;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.compatibleFields = new Resource$Reports$Compatiblefields(
        this.context
      );
      this.files = new Resource$Reports$Files(this.context);
    }

    /**
     * dfareporting.reports.delete
     * @desc Deletes a report by its ID.
     * @alias dfareporting.reports.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Reports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Reports$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Reports$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Reports$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.reports.get
     * @desc Retrieves a report by its ID.
     * @alias dfareporting.reports.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Reports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    get(
      params: Params$Resource$Reports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(
      params: Params$Resource$Reports$Get,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    get(callback: BodyResponseCallback<Schema$Report>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Reports$Get
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * dfareporting.reports.insert
     * @desc Creates a report.
     * @alias dfareporting.reports.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {().Report} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Reports$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    insert(
      params: Params$Resource$Reports$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    insert(
      params: Params$Resource$Reports$Insert,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Report>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Reports$Insert
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/reports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * dfareporting.reports.list
     * @desc Retrieves list of reports.
     * @alias dfareporting.reports.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string=} params.scope The scope that defines which results are returned.
     * @param {string=} params.sortField The field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Reports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReportList>;
    list(
      params: Params$Resource$Reports$List,
      options: MethodOptions | BodyResponseCallback<Schema$ReportList>,
      callback: BodyResponseCallback<Schema$ReportList>
    ): void;
    list(
      params: Params$Resource$Reports$List,
      callback: BodyResponseCallback<Schema$ReportList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReportList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reports$List
        | BodyResponseCallback<Schema$ReportList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportList>,
      callback?: BodyResponseCallback<Schema$ReportList>
    ): void | GaxiosPromise<Schema$ReportList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/reports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReportList>(parameters);
      }
    }

    /**
     * dfareporting.reports.patch
     * @desc Updates a report. This method supports patch semantics.
     * @alias dfareporting.reports.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {().Report} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Reports$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    patch(
      params: Params$Resource$Reports$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(
      params: Params$Resource$Reports$Patch,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Report>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Reports$Patch
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }

    /**
     * dfareporting.reports.run
     * @desc Runs a report.
     * @alias dfareporting.reports.run
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {boolean=} params.synchronous If set and true, tries to run the report synchronously.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(
      params?: Params$Resource$Reports$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    run(
      params: Params$Resource$Reports$Run,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    run(
      params: Params$Resource$Reports$Run,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    run(callback: BodyResponseCallback<Schema$File>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Reports$Run
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}/run'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * dfareporting.reports.update
     * @desc Updates a report.
     * @alias dfareporting.reports.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {().Report} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Reports$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Report>;
    update(
      params: Params$Resource$Reports$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    update(
      params: Params$Resource$Reports$Update,
      callback: BodyResponseCallback<Schema$Report>
    ): void;
    update(callback: BodyResponseCallback<Schema$Report>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Reports$Update
        | BodyResponseCallback<Schema$Report>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Report>,
      callback?: BodyResponseCallback<Schema$Report>
    ): void | GaxiosPromise<Schema$Report> {
      let params = (paramsOrCallback || {}) as Params$Resource$Reports$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Report>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Report>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;
  }
  export interface Params$Resource$Reports$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;
  }
  export interface Params$Resource$Reports$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Reports$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous result page.
     */
    pageToken?: string;
    /**
     * The DFA user profile ID.
     */
    profileId?: string;
    /**
     * The scope that defines which results are returned.
     */
    scope?: string;
    /**
     * The field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Reports$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }
  export interface Params$Resource$Reports$Run extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;
    /**
     * If set and true, tries to run the report synchronously.
     */
    synchronous?: boolean;
  }
  export interface Params$Resource$Reports$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }

  export class Resource$Reports$Compatiblefields {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.reports.compatibleFields.query
     * @desc Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
     * @alias dfareporting.reports.compatibleFields.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The DFA user profile ID.
     * @param {().Report} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
      params?: Params$Resource$Reports$Compatiblefields$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompatibleFields>;
    query(
      params: Params$Resource$Reports$Compatiblefields$Query,
      options: MethodOptions | BodyResponseCallback<Schema$CompatibleFields>,
      callback: BodyResponseCallback<Schema$CompatibleFields>
    ): void;
    query(
      params: Params$Resource$Reports$Compatiblefields$Query,
      callback: BodyResponseCallback<Schema$CompatibleFields>
    ): void;
    query(callback: BodyResponseCallback<Schema$CompatibleFields>): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Reports$Compatiblefields$Query
        | BodyResponseCallback<Schema$CompatibleFields>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CompatibleFields>,
      callback?: BodyResponseCallback<Schema$CompatibleFields>
    ): void | GaxiosPromise<Schema$CompatibleFields> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Compatiblefields$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Compatiblefields$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/compatiblefields/query'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CompatibleFields>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CompatibleFields>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Compatiblefields$Query
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The DFA user profile ID.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Report;
  }

  export class Resource$Reports$Files {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.reports.files.get
     * @desc Retrieves a report file. This method supports media download.
     * @alias dfareporting.reports.files.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.fileId The ID of the report file.
     * @param {string} params.profileId The DFA profile ID.
     * @param {string} params.reportId The ID of the report.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Reports$Files$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$File>;
    get(
      params: Params$Resource$Reports$Files$Get,
      options: MethodOptions | BodyResponseCallback<Schema$File>,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(
      params: Params$Resource$Reports$Files$Get,
      callback: BodyResponseCallback<Schema$File>
    ): void;
    get(callback: BodyResponseCallback<Schema$File>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Reports$Files$Get
        | BodyResponseCallback<Schema$File>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$File>,
      callback?: BodyResponseCallback<Schema$File>
    ): void | GaxiosPromise<Schema$File> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Files$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Files$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}/files/{fileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId', 'fileId'],
        pathParams: ['fileId', 'profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$File>(parameters, callback);
      } else {
        return createAPIRequest<Schema$File>(parameters);
      }
    }

    /**
     * dfareporting.reports.files.list
     * @desc Lists files for a report.
     * @alias dfareporting.reports.files.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken The value of the nextToken from the previous result page.
     * @param {string} params.profileId The DFA profile ID.
     * @param {string} params.reportId The ID of the parent report.
     * @param {string=} params.sortField The field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Reports$Files$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FileList>;
    list(
      params: Params$Resource$Reports$Files$List,
      options: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(
      params: Params$Resource$Reports$Files$List,
      callback: BodyResponseCallback<Schema$FileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$FileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Reports$Files$List
        | BodyResponseCallback<Schema$FileList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$FileList>,
      callback?: BodyResponseCallback<Schema$FileList>
    ): void | GaxiosPromise<Schema$FileList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Reports$Files$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Files$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/reports/{reportId}/files'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'reportId'],
        pathParams: ['profileId', 'reportId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FileList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FileList>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Files$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The ID of the report file.
     */
    fileId?: string;
    /**
     * The DFA profile ID.
     */
    profileId?: string;
    /**
     * The ID of the report.
     */
    reportId?: string;
  }
  export interface Params$Resource$Reports$Files$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The value of the nextToken from the previous result page.
     */
    pageToken?: string;
    /**
     * The DFA profile ID.
     */
    profileId?: string;
    /**
     * The ID of the parent report.
     */
    reportId?: string;
    /**
     * The field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Sites {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.sites.get
     * @desc Gets one site by ID.
     * @alias dfareporting.sites.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Sites$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Site>;
    get(
      params: Params$Resource$Sites$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(
      params: Params$Resource$Sites$Get,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    get(callback: BodyResponseCallback<Schema$Site>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sites$Get
        | BodyResponseCallback<Schema$Site>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback?: BodyResponseCallback<Schema$Site>
    ): void | GaxiosPromise<Schema$Site> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sites/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Site>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * dfareporting.sites.insert
     * @desc Inserts a new site.
     * @alias dfareporting.sites.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Site} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Sites$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Site>;
    insert(
      params: Params$Resource$Sites$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    insert(
      params: Params$Resource$Sites$Insert,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Site>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Sites$Insert
        | BodyResponseCallback<Schema$Site>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback?: BodyResponseCallback<Schema$Site>
    ): void | GaxiosPromise<Schema$Site> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Site>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * dfareporting.sites.list
     * @desc Retrieves a list of sites, possibly filtered. This method supports paging.
     * @alias dfareporting.sites.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
     * @param {boolean=} params.acceptsPublisherPaidPlacements Select only sites that accept publisher paid placements.
     * @param {boolean=} params.adWordsSite Select only AdWords sites.
     * @param {boolean=} params.approved Select only approved sites.
     * @param {string=} params.campaignIds Select only sites with these campaign IDs.
     * @param {string=} params.directorySiteIds Select only sites with these directory site IDs.
     * @param {string=} params.ids Select only sites with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.subaccountId Select only sites with this subaccount ID.
     * @param {boolean=} params.unmappedSite Select only sites that have not been mapped to a directory site.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Sites$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SitesListResponse>;
    list(
      params: Params$Resource$Sites$List,
      options: MethodOptions | BodyResponseCallback<Schema$SitesListResponse>,
      callback: BodyResponseCallback<Schema$SitesListResponse>
    ): void;
    list(
      params: Params$Resource$Sites$List,
      callback: BodyResponseCallback<Schema$SitesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SitesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sites$List
        | BodyResponseCallback<Schema$SitesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SitesListResponse>,
      callback?: BodyResponseCallback<Schema$SitesListResponse>
    ): void | GaxiosPromise<Schema$SitesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SitesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SitesListResponse>(parameters);
      }
    }

    /**
     * dfareporting.sites.patch
     * @desc Updates an existing site. This method supports patch semantics.
     * @alias dfareporting.sites.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Site ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Site} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Sites$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Site>;
    patch(
      params: Params$Resource$Sites$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    patch(
      params: Params$Resource$Sites$Patch,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Site>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Sites$Patch
        | BodyResponseCallback<Schema$Site>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback?: BodyResponseCallback<Schema$Site>
    ): void | GaxiosPromise<Schema$Site> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Site>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }

    /**
     * dfareporting.sites.update
     * @desc Updates an existing site.
     * @alias dfareporting.sites.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Site} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Sites$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Site>;
    update(
      params: Params$Resource$Sites$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    update(
      params: Params$Resource$Sites$Update,
      callback: BodyResponseCallback<Schema$Site>
    ): void;
    update(callback: BodyResponseCallback<Schema$Site>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Sites$Update
        | BodyResponseCallback<Schema$Site>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Site>,
      callback?: BodyResponseCallback<Schema$Site>
    ): void | GaxiosPromise<Schema$Site> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sites$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sites$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sites'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Site>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Site>(parameters);
      }
    }
  }

  export interface Params$Resource$Sites$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Site ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Sites$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }
  export interface Params$Resource$Sites$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInStreamVideoPlacements?: boolean;
    /**
     * This search filter is no longer supported and will have no effect on the results returned.
     */
    acceptsInterstitialPlacements?: boolean;
    /**
     * Select only sites that accept publisher paid placements.
     */
    acceptsPublisherPaidPlacements?: boolean;
    /**
     * Select only AdWords sites.
     */
    adWordsSite?: boolean;
    /**
     * Select only approved sites.
     */
    approved?: boolean;
    /**
     * Select only sites with these campaign IDs.
     */
    campaignIds?: string[];
    /**
     * Select only sites with these directory site IDs.
     */
    directorySiteIds?: string[];
    /**
     * Select only sites with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only sites with this subaccount ID.
     */
    subaccountId?: string;
    /**
     * Select only sites that have not been mapped to a directory site.
     */
    unmappedSite?: boolean;
  }
  export interface Params$Resource$Sites$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Site ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }
  export interface Params$Resource$Sites$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Site;
  }

  export class Resource$Sizes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.sizes.get
     * @desc Gets one size by ID.
     * @alias dfareporting.sizes.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Size ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Sizes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Size>;
    get(
      params: Params$Resource$Sizes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Size>,
      callback: BodyResponseCallback<Schema$Size>
    ): void;
    get(
      params: Params$Resource$Sizes$Get,
      callback: BodyResponseCallback<Schema$Size>
    ): void;
    get(callback: BodyResponseCallback<Schema$Size>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sizes$Get
        | BodyResponseCallback<Schema$Size>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Size>,
      callback?: BodyResponseCallback<Schema$Size>
    ): void | GaxiosPromise<Schema$Size> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sizes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sizes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sizes/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Size>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Size>(parameters);
      }
    }

    /**
     * dfareporting.sizes.insert
     * @desc Inserts a new size.
     * @alias dfareporting.sizes.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Size} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Sizes$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Size>;
    insert(
      params: Params$Resource$Sizes$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Size>,
      callback: BodyResponseCallback<Schema$Size>
    ): void;
    insert(
      params: Params$Resource$Sizes$Insert,
      callback: BodyResponseCallback<Schema$Size>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Size>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Sizes$Insert
        | BodyResponseCallback<Schema$Size>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Size>,
      callback?: BodyResponseCallback<Schema$Size>
    ): void | GaxiosPromise<Schema$Size> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sizes$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sizes$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sizes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Size>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Size>(parameters);
      }
    }

    /**
     * dfareporting.sizes.list
     * @desc Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
     * @alias dfareporting.sizes.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.height Select only sizes with this height.
     * @param {boolean=} params.iabStandard Select only IAB standard sizes.
     * @param {string=} params.ids Select only sizes with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {integer=} params.width Select only sizes with this width.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Sizes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SizesListResponse>;
    list(
      params: Params$Resource$Sizes$List,
      options: MethodOptions | BodyResponseCallback<Schema$SizesListResponse>,
      callback: BodyResponseCallback<Schema$SizesListResponse>
    ): void;
    list(
      params: Params$Resource$Sizes$List,
      callback: BodyResponseCallback<Schema$SizesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SizesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sizes$List
        | BodyResponseCallback<Schema$SizesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SizesListResponse>,
      callback?: BodyResponseCallback<Schema$SizesListResponse>
    ): void | GaxiosPromise<Schema$SizesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sizes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sizes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/sizes'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SizesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SizesListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sizes$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Size ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Sizes$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Size;
  }
  export interface Params$Resource$Sizes$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only sizes with this height.
     */
    height?: number;
    /**
     * Select only IAB standard sizes.
     */
    iabStandard?: boolean;
    /**
     * Select only sizes with these IDs.
     */
    ids?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Select only sizes with this width.
     */
    width?: number;
  }

  export class Resource$Subaccounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.subaccounts.get
     * @desc Gets one subaccount by ID.
     * @alias dfareporting.subaccounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Subaccount ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Subaccounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subaccount>;
    get(
      params: Params$Resource$Subaccounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subaccount>,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    get(
      params: Params$Resource$Subaccounts$Get,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subaccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Subaccounts$Get
        | BodyResponseCallback<Schema$Subaccount>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subaccount>,
      callback?: BodyResponseCallback<Schema$Subaccount>
    ): void | GaxiosPromise<Schema$Subaccount> {
      let params = (paramsOrCallback || {}) as Params$Resource$Subaccounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subaccounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/subaccounts/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subaccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subaccount>(parameters);
      }
    }

    /**
     * dfareporting.subaccounts.insert
     * @desc Inserts a new subaccount.
     * @alias dfareporting.subaccounts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Subaccount} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Subaccounts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subaccount>;
    insert(
      params: Params$Resource$Subaccounts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Subaccount>,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    insert(
      params: Params$Resource$Subaccounts$Insert,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Subaccount>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Subaccounts$Insert
        | BodyResponseCallback<Schema$Subaccount>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subaccount>,
      callback?: BodyResponseCallback<Schema$Subaccount>
    ): void | GaxiosPromise<Schema$Subaccount> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subaccounts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subaccounts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/subaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subaccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subaccount>(parameters);
      }
    }

    /**
     * dfareporting.subaccounts.list
     * @desc Gets a list of subaccounts, possibly filtered. This method supports paging.
     * @alias dfareporting.subaccounts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only subaccounts with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Subaccounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubaccountsListResponse>;
    list(
      params: Params$Resource$Subaccounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubaccountsListResponse>,
      callback: BodyResponseCallback<Schema$SubaccountsListResponse>
    ): void;
    list(
      params: Params$Resource$Subaccounts$List,
      callback: BodyResponseCallback<Schema$SubaccountsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SubaccountsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Subaccounts$List
        | BodyResponseCallback<Schema$SubaccountsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubaccountsListResponse>,
      callback?: BodyResponseCallback<Schema$SubaccountsListResponse>
    ): void | GaxiosPromise<Schema$SubaccountsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Subaccounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subaccounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/subaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubaccountsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubaccountsListResponse>(parameters);
      }
    }

    /**
     * dfareporting.subaccounts.patch
     * @desc Updates an existing subaccount. This method supports patch semantics.
     * @alias dfareporting.subaccounts.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Subaccount ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Subaccount} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Subaccounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subaccount>;
    patch(
      params: Params$Resource$Subaccounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Subaccount>,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    patch(
      params: Params$Resource$Subaccounts$Patch,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Subaccount>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Subaccounts$Patch
        | BodyResponseCallback<Schema$Subaccount>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subaccount>,
      callback?: BodyResponseCallback<Schema$Subaccount>
    ): void | GaxiosPromise<Schema$Subaccount> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subaccounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subaccounts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/subaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subaccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subaccount>(parameters);
      }
    }

    /**
     * dfareporting.subaccounts.update
     * @desc Updates an existing subaccount.
     * @alias dfareporting.subaccounts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().Subaccount} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Subaccounts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subaccount>;
    update(
      params: Params$Resource$Subaccounts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Subaccount>,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    update(
      params: Params$Resource$Subaccounts$Update,
      callback: BodyResponseCallback<Schema$Subaccount>
    ): void;
    update(callback: BodyResponseCallback<Schema$Subaccount>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Subaccounts$Update
        | BodyResponseCallback<Schema$Subaccount>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subaccount>,
      callback?: BodyResponseCallback<Schema$Subaccount>
    ): void | GaxiosPromise<Schema$Subaccount> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subaccounts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subaccounts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/subaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subaccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subaccount>(parameters);
      }
    }
  }

  export interface Params$Resource$Subaccounts$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Subaccount ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Subaccounts$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subaccount;
  }
  export interface Params$Resource$Subaccounts$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only subaccounts with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Subaccounts$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Subaccount ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subaccount;
  }
  export interface Params$Resource$Subaccounts$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subaccount;
  }

  export class Resource$Targetableremarketinglists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.targetableRemarketingLists.get
     * @desc Gets one remarketing list by ID.
     * @alias dfareporting.targetableRemarketingLists.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Remarketing list ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Targetableremarketinglists$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetableRemarketingList>;
    get(
      params: Params$Resource$Targetableremarketinglists$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetableRemarketingList>,
      callback: BodyResponseCallback<Schema$TargetableRemarketingList>
    ): void;
    get(
      params: Params$Resource$Targetableremarketinglists$Get,
      callback: BodyResponseCallback<Schema$TargetableRemarketingList>
    ): void;
    get(callback: BodyResponseCallback<Schema$TargetableRemarketingList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Targetableremarketinglists$Get
        | BodyResponseCallback<Schema$TargetableRemarketingList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetableRemarketingList>,
      callback?: BodyResponseCallback<Schema$TargetableRemarketingList>
    ): void | GaxiosPromise<Schema$TargetableRemarketingList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetableremarketinglists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetableremarketinglists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetableRemarketingLists/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetableRemarketingList>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TargetableRemarketingList>(parameters);
      }
    }

    /**
     * dfareporting.targetableRemarketingLists.list
     * @desc Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
     * @alias dfareporting.targetableRemarketingLists.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.active Select only active or only inactive targetable remarketing lists.
     * @param {string} params.advertiserId Select only targetable remarketing lists targetable by these advertisers.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Targetableremarketinglists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetableRemarketingListsListResponse>;
    list(
      params: Params$Resource$Targetableremarketinglists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>,
      callback: BodyResponseCallback<
        Schema$TargetableRemarketingListsListResponse
      >
    ): void;
    list(
      params: Params$Resource$Targetableremarketinglists$List,
      callback: BodyResponseCallback<
        Schema$TargetableRemarketingListsListResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$TargetableRemarketingListsListResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Targetableremarketinglists$List
        | BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetableRemarketingListsListResponse>,
      callback?: BodyResponseCallback<
        Schema$TargetableRemarketingListsListResponse
      >
    ): void | GaxiosPromise<Schema$TargetableRemarketingListsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetableremarketinglists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetableremarketinglists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetableRemarketingLists'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'advertiserId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetableRemarketingListsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TargetableRemarketingListsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Targetableremarketinglists$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Remarketing list ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Targetableremarketinglists$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only active or only inactive targetable remarketing lists.
     */
    active?: boolean;
    /**
     * Select only targetable remarketing lists targetable by these advertisers.
     */
    advertiserId?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
     */
    name?: string;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }

  export class Resource$Targetingtemplates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.targetingTemplates.get
     * @desc Gets one targeting template by ID.
     * @alias dfareporting.targetingTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Targeting template ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Targetingtemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetingTemplate>;
    get(
      params: Params$Resource$Targetingtemplates$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    get(
      params: Params$Resource$Targetingtemplates$Get,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    get(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Targetingtemplates$Get
        | BodyResponseCallback<Schema$TargetingTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplate>,
      callback?: BodyResponseCallback<Schema$TargetingTemplate>
    ): void | GaxiosPromise<Schema$TargetingTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetingtemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetingtemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetingTemplates/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetingTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TargetingTemplate>(parameters);
      }
    }

    /**
     * dfareporting.targetingTemplates.insert
     * @desc Inserts a new targeting template.
     * @alias dfareporting.targetingTemplates.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().TargetingTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Targetingtemplates$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetingTemplate>;
    insert(
      params: Params$Resource$Targetingtemplates$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    insert(
      params: Params$Resource$Targetingtemplates$Insert,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    insert(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Targetingtemplates$Insert
        | BodyResponseCallback<Schema$TargetingTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplate>,
      callback?: BodyResponseCallback<Schema$TargetingTemplate>
    ): void | GaxiosPromise<Schema$TargetingTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetingtemplates$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetingtemplates$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetingTemplates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetingTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TargetingTemplate>(parameters);
      }
    }

    /**
     * dfareporting.targetingTemplates.list
     * @desc Retrieves a list of targeting templates, optionally filtered. This method supports paging.
     * @alias dfareporting.targetingTemplates.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.advertiserId Select only targeting templates with this advertiser ID.
     * @param {string=} params.ids Select only targeting templates with these IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Targetingtemplates$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetingTemplatesListResponse>;
    list(
      params: Params$Resource$Targetingtemplates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplatesListResponse>,
      callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>
    ): void;
    list(
      params: Params$Resource$Targetingtemplates$List,
      callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$TargetingTemplatesListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Targetingtemplates$List
        | BodyResponseCallback<Schema$TargetingTemplatesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplatesListResponse>,
      callback?: BodyResponseCallback<Schema$TargetingTemplatesListResponse>
    ): void | GaxiosPromise<Schema$TargetingTemplatesListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetingtemplates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetingtemplates$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetingTemplates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetingTemplatesListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TargetingTemplatesListResponse>(
          parameters
        );
      }
    }

    /**
     * dfareporting.targetingTemplates.patch
     * @desc Updates an existing targeting template. This method supports patch semantics.
     * @alias dfareporting.targetingTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Targeting template ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().TargetingTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Targetingtemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetingTemplate>;
    patch(
      params: Params$Resource$Targetingtemplates$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    patch(
      params: Params$Resource$Targetingtemplates$Patch,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Targetingtemplates$Patch
        | BodyResponseCallback<Schema$TargetingTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplate>,
      callback?: BodyResponseCallback<Schema$TargetingTemplate>
    ): void | GaxiosPromise<Schema$TargetingTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetingtemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetingtemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetingTemplates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetingTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TargetingTemplate>(parameters);
      }
    }

    /**
     * dfareporting.targetingTemplates.update
     * @desc Updates an existing targeting template.
     * @alias dfareporting.targetingTemplates.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().TargetingTemplate} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Targetingtemplates$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TargetingTemplate>;
    update(
      params: Params$Resource$Targetingtemplates$Update,
      options: MethodOptions | BodyResponseCallback<Schema$TargetingTemplate>,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    update(
      params: Params$Resource$Targetingtemplates$Update,
      callback: BodyResponseCallback<Schema$TargetingTemplate>
    ): void;
    update(callback: BodyResponseCallback<Schema$TargetingTemplate>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Targetingtemplates$Update
        | BodyResponseCallback<Schema$TargetingTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TargetingTemplate>,
      callback?: BodyResponseCallback<Schema$TargetingTemplate>
    ): void | GaxiosPromise<Schema$TargetingTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Targetingtemplates$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Targetingtemplates$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/targetingTemplates'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TargetingTemplate>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TargetingTemplate>(parameters);
      }
    }
  }

  export interface Params$Resource$Targetingtemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Targeting template ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Targetingtemplates$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TargetingTemplate;
  }
  export interface Params$Resource$Targetingtemplates$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only targeting templates with this advertiser ID.
     */
    advertiserId?: string;
    /**
     * Select only targeting templates with these IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
  }
  export interface Params$Resource$Targetingtemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Targeting template ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TargetingTemplate;
  }
  export interface Params$Resource$Targetingtemplates$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TargetingTemplate;
  }

  export class Resource$Userprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.userProfiles.get
     * @desc Gets one user profile by ID.
     * @alias dfareporting.userProfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId The user profile ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Userprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserProfile>;
    get(
      params: Params$Resource$Userprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserProfile>,
      callback: BodyResponseCallback<Schema$UserProfile>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Get,
      callback: BodyResponseCallback<Schema$UserProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Get
        | BodyResponseCallback<Schema$UserProfile>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserProfile>,
      callback?: BodyResponseCallback<Schema$UserProfile>
    ): void | GaxiosPromise<Schema$UserProfile> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserProfile>(parameters);
      }
    }

    /**
     * dfareporting.userProfiles.list
     * @desc Retrieves list of user profiles for a user.
     * @alias dfareporting.userProfiles.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Userprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserProfileList>;
    list(
      params: Params$Resource$Userprofiles$List,
      options: MethodOptions | BodyResponseCallback<Schema$UserProfileList>,
      callback: BodyResponseCallback<Schema$UserProfileList>
    ): void;
    list(
      params: Params$Resource$Userprofiles$List,
      callback: BodyResponseCallback<Schema$UserProfileList>
    ): void;
    list(callback: BodyResponseCallback<Schema$UserProfileList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$List
        | BodyResponseCallback<Schema$UserProfileList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserProfileList>,
      callback?: BodyResponseCallback<Schema$UserProfileList>
    ): void | GaxiosPromise<Schema$UserProfileList> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/dfareporting/v3.2/userprofiles').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserProfileList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserProfileList>(parameters);
      }
    }
  }

  export interface Params$Resource$Userprofiles$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The user profile ID.
     */
    profileId?: string;
  }
  export interface Params$Resource$Userprofiles$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
  }

  export class Resource$Userrolepermissiongroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.userRolePermissionGroups.get
     * @desc Gets one user role permission group by ID.
     * @alias dfareporting.userRolePermissionGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role permission group ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Userrolepermissiongroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRolePermissionGroup>;
    get(
      params: Params$Resource$Userrolepermissiongroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionGroup>,
      callback: BodyResponseCallback<Schema$UserRolePermissionGroup>
    ): void;
    get(
      params: Params$Resource$Userrolepermissiongroups$Get,
      callback: BodyResponseCallback<Schema$UserRolePermissionGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserRolePermissionGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userrolepermissiongroups$Get
        | BodyResponseCallback<Schema$UserRolePermissionGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionGroup>,
      callback?: BodyResponseCallback<Schema$UserRolePermissionGroup>
    ): void | GaxiosPromise<Schema$UserRolePermissionGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userrolepermissiongroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userrolepermissiongroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRolePermissionGroups/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRolePermissionGroup>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRolePermissionGroup>(parameters);
      }
    }

    /**
     * dfareporting.userRolePermissionGroups.list
     * @desc Gets a list of all supported user role permission groups.
     * @alias dfareporting.userRolePermissionGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Userrolepermissiongroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRolePermissionGroupsListResponse>;
    list(
      params: Params$Resource$Userrolepermissiongroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>,
      callback: BodyResponseCallback<
        Schema$UserRolePermissionGroupsListResponse
      >
    ): void;
    list(
      params: Params$Resource$Userrolepermissiongroups$List,
      callback: BodyResponseCallback<
        Schema$UserRolePermissionGroupsListResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$UserRolePermissionGroupsListResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userrolepermissiongroups$List
        | BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionGroupsListResponse>,
      callback?: BodyResponseCallback<
        Schema$UserRolePermissionGroupsListResponse
      >
    ): void | GaxiosPromise<Schema$UserRolePermissionGroupsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userrolepermissiongroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userrolepermissiongroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRolePermissionGroups'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRolePermissionGroupsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$UserRolePermissionGroupsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Userrolepermissiongroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User role permission group ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Userrolepermissiongroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Userrolepermissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.userRolePermissions.get
     * @desc Gets one user role permission by ID.
     * @alias dfareporting.userRolePermissions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role permission ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Userrolepermissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRolePermission>;
    get(
      params: Params$Resource$Userrolepermissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserRolePermission>,
      callback: BodyResponseCallback<Schema$UserRolePermission>
    ): void;
    get(
      params: Params$Resource$Userrolepermissions$Get,
      callback: BodyResponseCallback<Schema$UserRolePermission>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserRolePermission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userrolepermissions$Get
        | BodyResponseCallback<Schema$UserRolePermission>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermission>,
      callback?: BodyResponseCallback<Schema$UserRolePermission>
    ): void | GaxiosPromise<Schema$UserRolePermission> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userrolepermissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userrolepermissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRolePermissions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRolePermission>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRolePermission>(parameters);
      }
    }

    /**
     * dfareporting.userRolePermissions.list
     * @desc Gets a list of user role permissions, possibly filtered.
     * @alias dfareporting.userRolePermissions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ids Select only user role permissions with these IDs.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Userrolepermissions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRolePermissionsListResponse>;
    list(
      params: Params$Resource$Userrolepermissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionsListResponse>,
      callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>
    ): void;
    list(
      params: Params$Resource$Userrolepermissions$List,
      callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$UserRolePermissionsListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userrolepermissions$List
        | BodyResponseCallback<Schema$UserRolePermissionsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolePermissionsListResponse>,
      callback?: BodyResponseCallback<Schema$UserRolePermissionsListResponse>
    ): void | GaxiosPromise<Schema$UserRolePermissionsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userrolepermissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userrolepermissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRolePermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRolePermissionsListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$UserRolePermissionsListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Userrolepermissions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User role permission ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Userrolepermissions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only user role permissions with these IDs.
     */
    ids?: string[];
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }

  export class Resource$Userroles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.userRoles.delete
     * @desc Deletes an existing user role.
     * @alias dfareporting.userRoles.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Userroles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Userroles$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Userroles$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Userroles$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRoles/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * dfareporting.userRoles.get
     * @desc Gets one user role by ID.
     * @alias dfareporting.userRoles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Userroles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRole>;
    get(
      params: Params$Resource$Userroles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    get(
      params: Params$Resource$Userroles$Get,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserRole>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userroles$Get
        | BodyResponseCallback<Schema$UserRole>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback?: BodyResponseCallback<Schema$UserRole>
    ): void | GaxiosPromise<Schema$UserRole> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/userRoles/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRole>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRole>(parameters);
      }
    }

    /**
     * dfareporting.userRoles.insert
     * @desc Inserts a new user role.
     * @alias dfareporting.userRoles.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().UserRole} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Userroles$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRole>;
    insert(
      params: Params$Resource$Userroles$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    insert(
      params: Params$Resource$Userroles$Insert,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    insert(callback: BodyResponseCallback<Schema$UserRole>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Userroles$Insert
        | BodyResponseCallback<Schema$UserRole>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback?: BodyResponseCallback<Schema$UserRole>
    ): void | GaxiosPromise<Schema$UserRole> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/userRoles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRole>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRole>(parameters);
      }
    }

    /**
     * dfareporting.userRoles.list
     * @desc Retrieves a list of user roles, possibly filtered. This method supports paging.
     * @alias dfareporting.userRoles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.accountUserRoleOnly Select only account level user roles not associated with any specific subaccount.
     * @param {string=} params.ids Select only user roles with the specified IDs.
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Value of the nextPageToken from the previous result page.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {string=} params.searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
     * @param {string=} params.sortField Field by which to sort the list.
     * @param {string=} params.sortOrder Order of sorted results.
     * @param {string=} params.subaccountId Select only user roles that belong to this subaccount.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Userroles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRolesListResponse>;
    list(
      params: Params$Resource$Userroles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolesListResponse>,
      callback: BodyResponseCallback<Schema$UserRolesListResponse>
    ): void;
    list(
      params: Params$Resource$Userroles$List,
      callback: BodyResponseCallback<Schema$UserRolesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$UserRolesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userroles$List
        | BodyResponseCallback<Schema$UserRolesListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$UserRolesListResponse>,
      callback?: BodyResponseCallback<Schema$UserRolesListResponse>
    ): void | GaxiosPromise<Schema$UserRolesListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/userRoles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRolesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRolesListResponse>(parameters);
      }
    }

    /**
     * dfareporting.userRoles.patch
     * @desc Updates an existing user role. This method supports patch semantics.
     * @alias dfareporting.userRoles.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id User role ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().UserRole} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Userroles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRole>;
    patch(
      params: Params$Resource$Userroles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    patch(
      params: Params$Resource$Userroles$Patch,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserRole>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Userroles$Patch
        | BodyResponseCallback<Schema$UserRole>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback?: BodyResponseCallback<Schema$UserRole>
    ): void | GaxiosPromise<Schema$UserRole> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/userRoles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRole>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRole>(parameters);
      }
    }

    /**
     * dfareporting.userRoles.update
     * @desc Updates an existing user role.
     * @alias dfareporting.userRoles.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {().UserRole} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Userroles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserRole>;
    update(
      params: Params$Resource$Userroles$Update,
      options: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    update(
      params: Params$Resource$Userroles$Update,
      callback: BodyResponseCallback<Schema$UserRole>
    ): void;
    update(callback: BodyResponseCallback<Schema$UserRole>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Userroles$Update
        | BodyResponseCallback<Schema$UserRole>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$UserRole>,
      callback?: BodyResponseCallback<Schema$UserRole>
    ): void | GaxiosPromise<Schema$UserRole> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userroles$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userroles$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/dfareporting/v3.2/userprofiles/{profileId}/userRoles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserRole>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UserRole>(parameters);
      }
    }
  }

  export interface Params$Resource$Userroles$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User role ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Userroles$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User role ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Userroles$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserRole;
  }
  export interface Params$Resource$Userroles$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Select only account level user roles not associated with any specific subaccount.
     */
    accountUserRoleOnly?: boolean;
    /**
     * Select only user roles with the specified IDs.
     */
    ids?: string[];
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
    /**
     * Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
     */
    searchString?: string;
    /**
     * Field by which to sort the list.
     */
    sortField?: string;
    /**
     * Order of sorted results.
     */
    sortOrder?: string;
    /**
     * Select only user roles that belong to this subaccount.
     */
    subaccountId?: string;
  }
  export interface Params$Resource$Userroles$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User role ID.
     */
    id?: string;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserRole;
  }
  export interface Params$Resource$Userroles$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserRole;
  }

  export class Resource$Videoformats {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * dfareporting.videoFormats.get
     * @desc Gets one video format by ID.
     * @alias dfareporting.videoFormats.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.id Video format ID.
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Videoformats$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoFormat>;
    get(
      params: Params$Resource$Videoformats$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VideoFormat>,
      callback: BodyResponseCallback<Schema$VideoFormat>
    ): void;
    get(
      params: Params$Resource$Videoformats$Get,
      callback: BodyResponseCallback<Schema$VideoFormat>
    ): void;
    get(callback: BodyResponseCallback<Schema$VideoFormat>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Videoformats$Get
        | BodyResponseCallback<Schema$VideoFormat>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoFormat>,
      callback?: BodyResponseCallback<Schema$VideoFormat>
    ): void | GaxiosPromise<Schema$VideoFormat> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videoformats$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoformats$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/videoFormats/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId', 'id'],
        pathParams: ['id', 'profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoFormat>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VideoFormat>(parameters);
      }
    }

    /**
     * dfareporting.videoFormats.list
     * @desc Lists available video formats.
     * @alias dfareporting.videoFormats.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.profileId User profile ID associated with this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Videoformats$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoFormatsListResponse>;
    list(
      params: Params$Resource$Videoformats$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoFormatsListResponse>,
      callback: BodyResponseCallback<Schema$VideoFormatsListResponse>
    ): void;
    list(
      params: Params$Resource$Videoformats$List,
      callback: BodyResponseCallback<Schema$VideoFormatsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$VideoFormatsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videoformats$List
        | BodyResponseCallback<Schema$VideoFormatsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoFormatsListResponse>,
      callback?: BodyResponseCallback<Schema$VideoFormatsListResponse>
    ): void | GaxiosPromise<Schema$VideoFormatsListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoformats$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoformats$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/dfareporting/v3.2/userprofiles/{profileId}/videoFormats'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['profileId'],
        pathParams: ['profileId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoFormatsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VideoFormatsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Videoformats$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Video format ID.
     */
    id?: number;
    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
  export interface Params$Resource$Videoformats$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * User profile ID associated with this request.
     */
    profileId?: string;
  }
}
