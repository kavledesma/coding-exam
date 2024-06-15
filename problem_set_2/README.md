# Problem Set 2: Valid Parentheses

## Problem Description
Given a string, you need to check the pattern if every open bracket is closed by the correct type of bracket.

## Solution Overview
I solved it by creating 2 constants (opens, closes) containing the corresponding value of brackets.

From there, I loop through the string checking every 2 characters if their indexes from the 2 constants are equal.

If it's equal, the pattern is valid, otherwise it's invalid.

## Instructions to Run the Code
Enter these details in Postman:
- Link: http://localhost:8080/validParentheses
- HTTP Verb: POST
- Headers: Content-Type = application/json
- Body: { pattern: "--insert your pattern here--"}
