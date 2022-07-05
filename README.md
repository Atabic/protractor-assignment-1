Automation Assignment - 1

Your assignment is to write automation tests that thoroughly but efficiently test some features/scenarios.

The details of these features and scenarios is in use case section.
Tools for Automation
The tool used for writing these test cases should be Protractor which is a javascript based browser automation framework.

Use Mocha as test framework, Chai as assertion library and Typescript as programming language for this task.

*Use Page Object Model design pattern.*
Page Object Model: Page Object is a Design Pattern which has become popular in test automation for enhancing test maintenance and reducing code duplication. A page object is an object-oriented class that serves as an interface to a page of your AUT. The tests then use the methods of this page object class whenever they need to interact with that page of the UI. The benefit is that if the UI changes for the page, the tests themselves don’t need to change, only the code within the page object needs to change. Subsequently all changes to support that new UI are located in one place.
Automated Ultrasonic Testing (AUT)

** Why we need page object model?**
1. Lack of Domain Specific Language (DSL) Support1:  It is hard to understand what is being tested, because the Protractor specific vocabulary ( element, by.binding, by.model, etc.) is not related to the business and features. Having test specifications that speak the jargon of the domain goes a long way in helping business understand the rationale behind the tests

2. Code Duplication​2:  Following are the steps to add a new Todo function:

Get the addTodo input by model
Get the addButton button by css
Write something on the input using sendKeys
Click on the button to confirm.
Although it is just four lines long, it is likely that we will need to add todos in many of our tests, so these four lines will be copied and pasted along many files, leading to code duplication. For example, when you are testing the amount of todos that are pending, you will need to simulate adding todos before check the count.

3. High Coupling3:  Just as an exercise, ask yourself, what would happen if the input field where you type a new todo has to be changed? What if it was required to click a button before being able to enter a new todo? Such changes (which may seem unlikely at the start) end up happening in every project. It is essential to not be highly coupled, but instead be flexible enough to be ready for change.

4. Tough Maintenance:  All these issues above will make your awesome Protractor tests a huge pain to maintain in a medium/long term. As the project grows and change creeps in, nobody will be keen on changing the numerous ‘Adding todo logic’ spread across your code.

***Use Case***
KAYAK searches hundreds of other travel sites at once to find the information you need to make the right decisions on flights, hotels & car hires, in this use case a user performs flights search and views results on the results page. We want to make sure that the flight searching is working as expected. For this assignment we will verify if flights search form and flight results are working correctly.
