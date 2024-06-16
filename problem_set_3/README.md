# Problem Set 3: Longest Increasing Subsequence

## Problem Description
You need to get the length of the longest ascending subsequence in the given array.

For example, given the array [3, 4, -1, 0, 6, 2, 3], the longest Increasing Subsequence (LIS) for this is [-1, 0, 2, 3].

Therefore, the length of LIS is 4.

## Solution Overview
I created a nested for-loop that compares the size of the element of the selected index to its succeeding elements.

At the same time, I record the length of subsequence between the selected index and the elements being compared in a separate array. 

## Instructions to Run the Code
Enter these details in Postman:
- Link: http://localhost:8080/lengthOfLIS
- HTTP Verb: POST
- Headers: Content-Type = application/json
- Body: { "nums": [--insert your array of numbers here--]}
