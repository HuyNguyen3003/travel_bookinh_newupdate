import "@testing-library/jest-dom";
import { expect } from "@jest/globals";
import { uploadImageLocal, supabase } from "@/utils/supabase";
import {
  dataLogged,
  dataNotLogged,
  fetchData,
  is_correct_email_id,
  is_correct_path_image,
  is_wrong_email_id,
  is_wrong_path_image,
} from "../data_test/data_test";
const fs = require("fs");
const path = require("path");

describe("Unit test", () => {
  it("Uploading image files in .png format to supabase is successful when the path is correct and the file format is correct.", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ pathImage: is_correct_path_image }),
      } as Response)
    );
    const { pathImage } = await fetchData();

    const result = await uploadImageLocal(pathImage);

    expect(typeof result).toBe("string");
    expect(result.startsWith("https://")).toBe(true);
    expect(result.endsWith(".png")).toBe(true);
  });

  it("Uploading .png image files to supabase fails when there is no file path", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ pathImage: is_wrong_path_image }),
      } as Response)
    );
    const { pathImage } = await fetchData();
    const result = await uploadImageLocal(pathImage);
    expect(result).toBe("error");
  });

  it("Retrieving user information is successful when the email and id are correct", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: is_correct_email_id }),
      } as Response)
    );
    const {
      data: { email },
      data: { clerkId },
    } = await fetchData();

    const { data } = await supabase
      .from("Profile")
      .select("*")
      .eq("clerkId", clerkId)
      .eq("email", email);

    const result = data && data[0] ? data[0] : data;

    expect(result.email).toBe(email);
    expect(result.clerkId).toBe(clerkId);
  });

  it("Retrieve user information successfully when email or id is wrong", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: is_wrong_email_id }),
      } as Response)
    );
    const {
      data: { email },
      data: { clerkId },
    } = await fetchData();

    const { data } = await supabase
      .from("Profile")
      .select("*")
      .eq("clerkId", clerkId)
      .eq("email", email);

    const result = data && data[0] ? data[0] : data;
    expect(result).toEqual([]);
  });

  it("get data user login when logged", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ result: dataLogged }),
      } as Response)
    );
    const {
      result: {
        user: { id: idUser },
      },
    } = await fetchData();
    expect(typeof idUser).toBe("string");
    expect(idUser.startsWith("user_")).toBe(true);
  });

  it("get data user login when not logged in yet or login error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ result: dataNotLogged }),
      } as Response)
    );
    const { result } = await fetchData();
    expect(result).toEqual([]);
  });
});
