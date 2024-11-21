describe("Register", () => {
  it("Sai định dạng email", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Register").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__emailAddress").type("invalid-email");
    cy.get(".cl-formFieldInput__password").type("ValidPassword123");
    cy.get(".cl-formButtonPrimary").click();
    cy.wait(2000);
  });

  it("Mật khẩu quá ngắn", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Register").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__emailAddress").type("valid@example.com");
    cy.get(".cl-formFieldInput__password").type("short");
    cy.get(".cl-formButtonPrimary").click();
    cy.contains("Your password must contain 8 or more characters.").should(
      "be.visible"
    );

    cy.wait(2000);
  });

  it("Email rỗng", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Register").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__emailAddress").clear();
    cy.get("#emailAddress-field").should("have.attr", "required");

    cy.get(".cl-formFieldInput__password").type("ValidPassword123");
    cy.get(".cl-formButtonPrimary").click();

    cy.wait(2000);
  });

  it("should show error when password is empty", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Register").click();
    cy.wait(1000);

    cy.get(".cl-formFieldInput__emailAddress").type(
      "votuanhungit2008@gmail.com"
    );
    cy.get(".cl-formFieldInput__password").clear();
    cy.wait(1000);

    cy.get(".cl-formButtonPrimary").click();
    cy.contains("Your password must contain 8 or more characters.").should(
      "be.visible"
    );
    cy.wait(1000);
  });
  it("Email và mật khẩu hợp lệ", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Register").click();
    cy.wait(1000);

    cy.get(".cl-formFieldInput__emailAddress").type("valid@exampl222e.com");
    cy.get(".cl-formFieldInput__password").type("ValidPassword123");

    cy.get(".cl-formButtonPrimary").click();
    cy.wait(1000);
    const verificationCode = "123456";
    verificationCode.split("").forEach((digit, index) => {
      cy.get(`#digit-${index}-field`).type(digit); // Tìm từng ô nhập theo ID và nhập số vào
    });

    // Nhấn vào nút "Continue"

    cy.contains("button", "Continue").click();
    cy.wait(1000);
  });
});

describe("Login", () => {
  it("Nhập email sai ", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").type("wrongemail@example.com");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.contains("Couldn't find your account.").should("be.visible");
    cy.wait(2000);
  });

  it("Nhập email sai định dạng", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").type("invalid-email$%^&*");
    cy.get(".cl-formButtonPrimary.cl-button").click();

    cy.wait(2000);
  });

  it("Email đúng mật khẩu sai", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").type("votuanhungit2008@gmail.com");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.get(".cl-formFieldInput__password").type("wrongpassword");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.contains(
      "Password is incorrect. Try again, or use another method."
    ).should("be.visible");
    cy.wait(2000);
  });

  it("Email và mật khẩu hợp lệ ", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").type("votuanhungit2008@gmail.com");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.get(".cl-formFieldInput__password").type("tuanhungcm2003");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.visit("http://localhost:3000/");
    cy.wait(2000);
  });

  it("Mặc định rỗng", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").should("have.value", "");
    cy.wait(2000);
  });

  it("Cho phép nhập các ký tự đặc biệt", () => {
    cy.visit("http://localhost:3000");
    cy.get(".w-6.h-6.bg-primary.rounded-full.text-white").click();
    cy.get('div[role="menuitem"]').contains("Login").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__identifier").type("votuanhungit2008@gmail.com");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.wait(1000);
    cy.get(".cl-formFieldInput__password").type(
      "!@#$%^&*()_+{}:\"<>?[];',./`~"
    );

    // Kiểm tra nếu ô input chứa đúng các ký tự đặc biệt đã nhập
    cy.get(".cl-formFieldInput__password").should(
      "have.value",
      "!@#$%^&*()_+{}:\"<>?[];',./`~"
    );

    cy.wait(2000);
  });
});

describe("Create Rental Page", () => {
  beforeEach(() => {
    // Truy cập vào trang create rental
    cy.visit("http://localhost:3000/rentals/create");
    cy.get(".cl-formFieldInput__identifier").type("votuanhungit2008@gmail.com");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.get(".cl-formFieldInput__password").type("tuanhungcm2003");
    cy.get(".cl-formButtonPrimary.cl-button").click();
    cy.visit("http://localhost:3000/rentals/create");
    cy.wait(2000);
  });

  it("should have a title", () => {
    // Kiểm tra rằng tiêu đề của trang là "Create Rental"
    cy.contains("Create Property").should("exist");
  });
});
