"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    specs: ['test/spec/*_spec.js'],
    framework: 'mocha',
    multipleCapabilities: [
        { 'browserName': 'chrome' },
    ],
    mochaOpts: {
        reporter: "spec",
        slow: 300,
        timeout: 10000,
    },
    suites: {
        mochaTest: 'test/spec/test-spec.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ1csUUFBQSxNQUFNLEdBQVU7SUFDdkIsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyx1QkFBdUI7SUFDdkIsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFDOUIsU0FBUyxFQUFDLE9BQU87SUFDakIsb0JBQW9CLEVBQUU7UUFDcEIsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFDO0tBQzNCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsSUFBSSxFQUFFLEdBQUc7UUFDVCxPQUFPLEVBQUcsS0FBSztLQUNoQjtJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRyx3QkFBd0I7S0FDckM7Q0FDRixDQUFDIn0=