const httpMocks = require("node-mocks-http");
const dateHandler = require("../date.js");
const dateModel = require("../../../storage/models/date.model");

//---------------------------------------------------------------------------------------------------------------------

jest.mock("../../../storage/models/date.model", () => {

    return {
        isWeekend: jest.fn()
    };
})

//---------------------------------------------------------------------------------------------------------------------

test("[mock] date returned always true", async () => {

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });
    
    const response = httpMocks.createResponse();

    dateModel.isWeekend.mockResolvedValue(true);
    
    await dateHandler.date(request, response);
    
    expect(response.statusCode).toEqual(200);
    
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});

//---------------------------------------------------------------------------------------------------------------------