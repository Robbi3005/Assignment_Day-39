const dateModel = require("../../storage/models/date.model");

//---------------------------------------------------------------------------------------------------------------------

const date = async (_, res) => {
    try {
        const result = await dateModel.isWeekend();
        console.log(result);

        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

//---------------------------------------------------------------------------------------------------------------------

const leapYear = async (_, res) => {

    try {
        const result = await dateModel.leapYear();

        console.log(result);

        res.json({
            data: result,
            error: null
        });

    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

//---------------------------------------------------------------------------------------------------------------------

module.exports = {
    date,
    leapYear,
};
