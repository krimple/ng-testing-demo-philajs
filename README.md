# ng-testing-demo-philajs
Sample testing demo for the Philadelphia JS user group meeting - May 2016

Includes:
  * Story reporter for jasmine (makes it easier to follow tests)
  * Simple Jasmine unit test
  * Simple Angular 2 Service Test
  * Angular 2 Service Test with Dependency
  * Angular Component Unit Test
  * Angular Component Integration Test (currently disabled, not working)
  
Setting up:

```bash
npm install -g angular-cli karma-cli 
npm install -g typings@0.8.1

git clone https://github.com/krimple/ng-testing-demo-philajs.git
cd ng-testing-demo-philajs
typings install
npm install
```

To run tests
```bash
ng test
```
