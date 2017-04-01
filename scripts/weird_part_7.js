/** What about Asynchronous CallBacks ?
 * 
 * Asynchronous - More than one at a time
 * You have callback function to call when the function is complete
 * 
 *                          "The Browser"
 * __________________________________________________________________
 * [Rendering Engine]----
 *                      |
 *                      |       (Synchronous)
 *                      ---->[Javascript Engine]<------
 *                                                    |
 *                                                    |
 *                                              [Http Request]
 * 
 * Rendering engine - Renders, Paints, Prints the screen which ever you are looking at. - Asynchronous
 * Http Request - Getting request and response for data                                 - Asynchronous
 * 
 * Asynchronous inside the browser but inside the javascript engine everything is Synchronous
 * 
 */