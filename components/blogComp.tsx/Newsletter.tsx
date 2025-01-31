"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Newsletter() {
  return (
    <div className="bg-yellow-500 my-8 md:my-16">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center p-8">
        <h4 className="text-black font-semibold font-primary max-w-md text-3xl">
          Subscribe to our newsletter
        </h4>
        <div className="flex flex-col">
          <form className="flex gap-5">
            <Input
              placeholder="Enter Email Address"
              type="email"
              className="border-black border-b border-none bg-transparent ring-0 focus-within:border-b focus-within:bottom-0 focus:bg-transparent placeholder:text-gray-700"
            />
            <Button className="bg-black text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-gray-800">
              Submit
            </Button>
          </form>
          <p className="text-gray-700 pt-5">
            By “submitting”, you agree to join the ‘Hive Incubators’ Newsletter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
