import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About, { user, calculateTotal, isEven } from "../src/Components/About";
import React from "react";
import "@testing-library/jest-dom";

describe("About Tests", () => {

  //  Test 1: user object 
  it("checks user name", () => {
    expect(user.name).toBe("Rima");
  });

  //  Test 2: calculateTotal 
  it("calculates total expenses", () => {
    expect(calculateTotal([10, 20, 30, 40])).toBe(100);
  });

  //  Test 3: isEven function 
  it("checks even number", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
  });

  

});