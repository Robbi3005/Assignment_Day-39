const httpMocks = require("node-mocks-http");
const dateHandler = require("../date.js");

//---------------------------------------------------------------------------------------------------------------------

test("this year should return false", async () => {

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/leap-year",
    });

    const response = httpMocks.createResponse();

    await dateHandler.leapYear(request, response);

    expect(response._getJSONData()).toEqual({
        
        data: false,
        error: null
    });
});