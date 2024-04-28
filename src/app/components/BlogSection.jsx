"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Object3D } from "./Object3D";
import Screen3D from "./Screen3D";
import Link from "next/link";

 
  
  export const BlogSection = () => {


  
    return (
      <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">         
          <div className="mt-2 md:mt-0 text-left flex flex-col h-full mb-0">
          <h2 className="text-4xl font-bold text-white mb-8">Blog</h2>
            <p className="text-base lg:text-lg">
            Blogging is my creative outlet, where I share insights, 
            ideas, and experiences. It&apos;s a journey of exploration and expression, 
            inviting others to join in the conversation.
            </p>
            <div className="mt-8">
            <Link
              href="https://medium.com/@naziyamahimkar13"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View Page
              </span>
              </Link>
            </div>
          </div>
          <Screen3D /> 
        </div>
      </section>
    );
  };
  

  

export default BlogSection;

