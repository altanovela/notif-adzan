/**
 * Interface act Message Channel
 * 
 * author : rio.bastian
 * created : 2023-12-12 11:14
 */
class Channel {
    /*
     * Default Constructor
     */
    constructor(){
        // do nothing
    }
    /**
     * Charge Endpoint
     */
    notify(){
        throw new Error('Should be implemented');
    }
}

// Expose the class
module.exports = Channel;