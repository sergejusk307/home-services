import { HTTP_RESPONSE_CODE } from '#const/global.js';

const responseFormat = (req, res, next) => {
    res.success = (data) => {
        res.status(HTTP_RESPONSE_CODE.OK).json({
            data,
        });
    };

    res.created = (data) => {
        res.status(HTTP_RESPONSE_CODE.CREATED).json({
            data,
        });
    };

    res.deleted = () => {
        res.status(HTTP_RESPONSE_CODE.NO_CONTENT);
    };

    res.error = (message, { statusCode = HTTP_RESPONSE_CODE.INTERNAL_SERVER_ERROR, details = {} } = {}) => {
        res.status(statusCode).json({
            error: {
                message,
                details,
            },
            metadata: {
                timestamp: new Date().toISOString(),
            },
        });
    };

    next();
};

export default responseFormat;