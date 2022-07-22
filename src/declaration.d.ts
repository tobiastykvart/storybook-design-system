declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

// A textual assertion given by the user.
type Claim = {
  // A unique id
  id: string;
  /**
   * The claim text.
   *
   * @example
   * The earth is flat.
   */
  claim: string;
  // The language of the claim
  language?: string;
  // The position within the text.
  indexInText?: number;
  // True if claim should be hidden from results.
  hide?: boolean;
  // The assessment by the Factiverse AI. An Integer which ranges between 0 (false) and 100 (true).
  score?: number;
  // The list of sources relevant to this claim, supporting or rejecting it.
  evidence?: Array<Source>;
  // True if this claim has been fact checked before.
  hasBeenChecked?: boolean;
  // True if this claim is currently being fact checked and waiting for a response.
  isBeingChecked?: boolean;
  // True if the user has submitted positive feedback on the credibility assessment. Undefined if no feedback was given yet
  userAgrees?: boolean;
};

/**
 * A single source found to support/reject a claim.
 *
 * @example
 * A news article writing about the claim.
 */
type Source = {
  // A unique id
  id: string;
  // The title of the source, typically the headline.
  title?: string;
  // True if source should be hidden from results
  hide: boolean;
  // A short part of the text, ideally the most relevant part to the claim.
  snippet?: string;
  // The date on which the source was published.
  publishDate?: string;
  // The link linking to the source.
  url?: string;
  // The link displayed to the user, typically not the full link.
  domain?: string;
  searchEngine?: string;
  /*
   * The assessment by the Factiverse AI.
   * An Integer which ranges between 0 (doesn't support the claim)
   * and 100 (supports the claim).
   */
  softmaxScore?: number[];
  // True if the user has submitted positive feedback on the relevance. Undefined if no feedback was given yet
  userAgreesRelevance?: boolean;
  // True if the user has submitted positive feedback on the support assessment. Undefined if no feedback was given yet
  userAgreesSupport?: boolean;
};

type Filter = {
  label: string;
  selected: boolean;
};

/*
 * This function is called when the user clicks 'show/hide sources'
 */
type OnToggleSources = (selectedClaim: ClaimItem) => void;

/*
 * This function is called when the user clicks 'home'
 */
type OnHome = () => void;

/*
 * This function is called when the user clicks 'check whole text'
 */
type OnCheckWholeText = () => void;

/*
 * This function is called when the user clicks 'check marked text'
 */
type OnCheckMarkedText = () => void;

/*
 * This function is called when the user clicks 'hide highlighting'
 */
type OnHideHighlighting = () => void;

/*
 * This function is called when the user clicks 'change text'
 */
type OnChangeText = (id: string) => void;

/*
 * This function is called when the user clicks 'delete claim'
 */
type OnDeleteClaim = (selectedClaim: ClaimItem) => void;

type OnChangeSourceFilter = (
  checkbox: React.ChangeEvent<HTMLInputElement>
) => void;
type OnChangeClaimFilter = (
  checkbox: React.ChangeEvent<HTMLInputElement>
) => void;
type OnChangeSortClaimsCredibility = (
  radio: React.ChangeEvent<HTMLInputElement>
) => void;
type OnChangeSortClaimsOccurrence = (
  radio: React.ChangeEvent<HTMLInputElement>
) => void;
type OnChangeSortSourcesDate = (
  radio: React.ChangeEvent<HTMLInputElement>
) => void;
type OnChangeSortSourcesCredibility = (
  radio: React.ChangeEvent<HTMLInputElement>
) => void;

type OnChangeDisplayComponents = (
  radio: React.ChangeEvent<HTMLInputElement>
) => void;

type OnCheckClaim = (claimId: string) => void;

type OnFeedbackCredibility = (claim: Claim, userAgrees: boolean) => void;
type OnFeedbackSourceRelevance = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;
type OnFeedbackSourceSupport = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;

type OnSwitchLanguage = (radio: React.ChangeEvent<HTMLInputElement>) => void;

type OnChangeThumbsUpDown = (thumbsUp: boolean) => void;

type DisplayComponents = {
  claimTitle: boolean;
  claimSupportIndicator: boolean;
  claimSupportFeedback: boolean;
  sourceTitle: boolean;
  sourceFavicon: boolean;
  sourceSupportIndicator: boolean;
  sourceSupportFeedback: boolean;
  sourceRelevanceFeedback: boolean;
};

// Called when a user adds a new claim via the search bar
type OnSearchClaim = (claim: Claim) => void;

// enum SortByCredibility {
//   HighToLow,
//   LowToHigh,
// }

// enum SortByDate {
//   OldToNew,
//   NewToOld,
// }

type JSONValue = number;

interface JSONObject {
  [x: string]: JSONValue;
}

type JSONArray = Array<JSONValue>;

interface WordCloudEntry {
  value: string;
  count: number;
}

interface SearchResult {
  authors: Array<string>;
  claim: string;
  doc: string;
  domain: string;
  domainName: string;
  keywords: Array<string>;
  label: string;
  publishDate: string;
  searchEngine: string;
  url: string;
}
