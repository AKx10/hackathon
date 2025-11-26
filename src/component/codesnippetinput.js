"use client";

import React from "react";

const PLACEHOLDER = `<ins class="adsbyadgeist" 
style="display:inline-block;width:360px;height:360px;font-family:Arial;color:#63aa75"
data-publisher-id="689db8fa73b400a35ef64282"
data-api-key="882047bbd6a84effcb59b947c879c3fb0e5fa1e30ba5cdef8cefddd6df686603"
data-ad-slot="68b6e1fda9351150741d22d0"
data-slot-type="banner"
data-responsive="true" 
data-allowed-formats="jpg,jpeg,png,gif">
</ins>`;

const CodeSnippetInput = ({ codeSnippet, setCodeSnippet }) => {
  return (
    <textarea
      id="codeSnippet"
      value={codeSnippet}
      onChange={(e) => setCodeSnippet(e.target.value)}
      placeholder={PLACEHOLDER}
      className="w-full h-[200px] py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-mono text-sm"
    />
  );
};

export default CodeSnippetInput;
