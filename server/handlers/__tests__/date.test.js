const httpMocks = require("node-mocks-http");
const dateHandler = require("../date.js");

//---------------------------------------------------------------------------------------------------------------------

test.only("today should return false", async () => {

    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend",
    });

    const response = httpMocks.createResponse();

    await dateHandler.date(request, response);

    expect(response._getJSONData()).toEqual({
        
        data: false,
        error: null
    });
});