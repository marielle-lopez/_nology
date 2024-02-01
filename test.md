# Testing

- Making sure it does what we want it to do, regardless of the way it's implemented
- Provides certainty in that things will not break
- Documents how the code works
- Writing tests helps you understand the code
  - Helps you think of new edge cases
- It looks good to people who might want to hire you

## How Do We Test in Java

- In JavaScript, we used Jest as a testing library
  - Syntax is function-based

```js
describe("Purpose description", () => {
  beforeEach(() => {
    // run some code before each test
  });

  beforeAll(() => {
    // run come code once before all tests in the describe block
  });

  it("Does something", () => {
    // test code here
    expect(true).toBe(true);
  });
});
```

- In Java, we will use Junit
  - Syntax is annotation-based

```java
@BeforeEach
void setup() {
  // do something before each test
}

@BeforeAll
void globalSetup() {
  // do something before all tests run
}

@Test
public void MethodName_StateUnderTest_ExpectedBehaviour {
  // 1. Arrange and set up test
  // 2. Act
  // 3. Assert
}

@Test
public void calculateGrade_MarkIsNinetyPercent
```
