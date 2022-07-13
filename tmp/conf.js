"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['test/spec/*_spec.js'],
    framework: 'mocha',
    multipleCapabilities: [
        { 'browserName': 'chrome' },
    ],
    mochaOpts: {
        reporter: "spec",
        slow: 300,
        timeout: 20000,
    },
    suites: {
        mochaTest: 'test/spec/test-spec.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ1csUUFBQSxNQUFNLEdBQVU7SUFDdkIsbURBQW1EO0lBQ25ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLEtBQUssRUFBRSxDQUFDLHFCQUFxQixDQUFDO0lBQzlCLFNBQVMsRUFBQyxPQUFPO0lBQ2pCLG9CQUFvQixFQUFFO1FBQ3BCLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBQztLQUMzQjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxHQUFHO1FBQ1QsT0FBTyxFQUFHLEtBQUs7S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDTixTQUFTLEVBQUcsd0JBQXdCO0tBQ3JDO0NBQ0YsQ0FBQyJ9