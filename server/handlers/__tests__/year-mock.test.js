const httpMocks = require("node-mocks-http");
const dateHandler = require("../date.js");
const dateModel = require("../../../storage/models/date.model");

//---------------------------------------------------------------------------------------------------------------------

// jest.mock("../../../storage/models/date.model", () => {

//     return {
//         leapYear: jest.fn()
//     };
// })

//---------------------------------------------------------------------------------------------------------------------

test("[mock] year returned always 2024-05-15", async () => {

    jest
        .useFakeTimers()
        .setSystemTime(new Date('2024-05-15'));

    console.log(new Date().getFullYear());

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/leap-year",
    });

    const response = httpMocks.createResponse();

    // dateModel.leapYear.mockResolvedValue(true);

    await dateHandler.leapYear(request, response);

    expect(response.statusCode).toEqual(200);

    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

//---------------------------------------------------------------------------------------------------------------------