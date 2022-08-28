// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
 const urlBasic: string = "88.1.205.136:9595";

export const environment = {


  production: true,
  urlBooksRandom:  `88.1.205.136:9595/get`,
  urlAddBook:  `88.1.205.136:9595/createBook`,
  urlAddReserve:  `88.1.205.136:9595/reserve`,
  urlPdf: `88.1.205.136:9595/reserve/reserve/export/pdf`,
  urlChangePassword:  `88.1.205.136:9595/users/changePassword`,
  urlReservedByUser: `88.1.205.136:9595/reserve/reservedBooksByUserId`,
  urlAllReservesByUser: `88.1.205.136:9595/reserve/getAllReservationById`,
  urlAllBooksByIdBD:  `88.1.205.136:9595/getByIdBook`,

};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
 */
