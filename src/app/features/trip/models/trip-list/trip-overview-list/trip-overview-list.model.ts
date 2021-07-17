import { TripFlagModel, TRIP_FLAG_STUB } from '@trip/models/trip-core.model';

/**
 * Interface to display list of all the trips in the Firestore Database
 * 
 * ```ts
 * interface TripOverviewListVMModel {
 *   trips : TripOveriewModel[];
 *   flags : {
 *     trips : TripFlagModel;
 *   };
 * }
 * ```
 *
 * @export
 * @interface TripOverviewListModel
 */
export interface TripOverviewListVMModel {
  trips: TripOverviewModel[];
  flags: {
    trips: TripFlagModel;
  };
}

/**
 * Stub for `TripOverviewListModel`
 * 
 * ```ts
 * const TRIP_OVERVIEW_LIST_STUB: TripOverviewListModel = {
 *   trips : [],
 *   flags: {
 *     trips: { ...TRIP_FLAG_STUB }
 *   }
 * };
 * ```
 */
export const TRIP_OVERVIEW_LIST_STUB: TripOverviewListVMModel = {
  trips: [],
  flags: {
    trips: { ...TRIP_FLAG_STUB }
  }
};

// Generated by https://quicktype.io

/**
 * Interface to hold the structure of overview of a trip
 * 
 * ```ts
 * interface TripModel {
 *   title   : string;
 *   tenure  : TripOverviewTenureModel;
 *   expense : TripOverivewExpenseModel;
 *   rating  : number;
 * }
 * ```
 *
 * @interface TripModel
 */
export interface TripOverviewModel {
  /**
   * Title of the trip
   *
   * @type {string}
   * @memberof TripModel
   */
  title: string;

  /**
   * Tenure of the trip - holds the following entities
   * - Trip Start Timestamp
   * - Trip End Timestamp
   *
   * @type {TripOverviewTenureModel}
   * @memberof TripModel
   */
  tenure: TripOverviewTenureModel;

  /**
   * Expenses of the Trip
   *
   * @type {TripOverivewExpenseModel}
   * @memberof TripModel
   */
  expense: TripOverivewExpenseModel;

  /**
   * Overall rating of the trip
   *
   * @type {number}
   * @memberof TripModel
   */
  rating: number;
}

/**
 * Trip Expense Model
 *
 * > This `interface` might be promoted to the `core` module due to its potential extensive usage
 * 
 * ```ts
 * interface TripOverivewExpenseModel {
 *   amount   : number;
 *   currency : string;
 * }
 * ```
 *
 * @interface TripOverivewExpenseModel
 */
interface TripOverivewExpenseModel {
  /**
   * Amount of the overall expenses for the trip
   *
   * @type {number}
   * @memberof TripOverivewExpenseModel
   */
  amount: number;

  /**
   * Amount Currency
   *
   * @type {string}
   * @memberof TripOverivewExpenseModel
   */
  currency: CurrencyType;
}

/**
 * Holds the tenure information of a trip overview
 * 
 * > This `interface` might be promoted to the `core` module due to its potential extensive usage
 *
 * ```ts
 * interface TripOverviewTenureModel {
 *   start : TripTimestampModel;
 *   end   : TripTimestampModel;
 * }
 * ```
 * 
 * @interface TripOverviewTenureModel
 */
interface TripOverviewTenureModel {
  /**
   * Timestamp of the start of the trip
   *
   * @type {TripTimestampModel}
   * @memberof TripOverviewTenureModel
   */
  start: TripTimestampModel;

  /**
   * Timestamp of the end of the trip
   *
   * @type {TripTimestampModel}
   * @memberof TripOverviewTenureModel
   */
  end: TripTimestampModel;
}

/**
 * Timestamp model as returned by `FireStore`
 * 
 * > This `interface` might be promoted to the `core` module due to its potential extensive usage
 * 
 * ```ts
 * interface TripTimestampModel {
 *   seconds     : number;
 *   nanoseconds : number;
 * }
 * ```
 *
 * @interface TripTimestampModel
 */
interface TripTimestampModel {
  /**
   * Normally the `seconds` field would be populated by default.
   * 
   * > 😈 Unless the timestamp is extremely precise
   * 
   * To Convert it into date, use the below calculation
   * 
   * ```js
   * const date = new Date(seconds * 1000);
   * // do whatever date operations using this
   * ```
   *
   * @type {number}
   * @memberof TripTimestampModel
   */
  seconds: number;
  nanoseconds: number;
}

/**
 * Currency Type
 * 
 * > This `type` might be promoted to the `core` module due to its potential extensive usage
 * 
 * Currently supported currencies
 * - INR
 * - USD
 */
type CurrencyType =
  | 'INR'
  | 'USD';