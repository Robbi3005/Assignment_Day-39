const dateModel = require("../../storage/models/date.model");

//---------------------------------------------------------------------------------------------------------------------

const date = async (req, res) => {

    try {
        const result = await dateModel.isWeekend();

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
};
