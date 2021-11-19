export default function asyncMiddleHandler(callback) {

    return async (req, res, next) => {
        try {

            await callback(req, res,next);
        } catch (error) {
            next(error);
        }

    };

}