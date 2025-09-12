function maskEmail(email) {
    let [localPart, domain] = email.split("@");
    if (localPart.length <= 2) {
      return maskedLocal + "@" + domain;
    }
    let maskedLocal = localPart[0] + "*".repeat(localPart.length - 2) + localPart[localPart.length - 1];
    return maskedLocal + "@" + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email)); 