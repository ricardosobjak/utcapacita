/*
module.exports = function ResponseError(category, message, moreInfo = null) {
    this.category = category;
    this.message = message;
    this.moreInfo = moreInfo;
}
*/

class ResponseError {
    constructor(category, message, moreInfo) {
        this.category = category;
        this.message = message;
        this.moreInfo = moreInfo;
    }
}

module.exports = {
    ResponseError
};