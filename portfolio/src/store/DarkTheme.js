import React from "react";
import { create } from "zustand";

const DarkTheme = create(set => ({
    dark: false,
    handleTheme: () => set((state) => ({dark: !state.dark})),
    
}));


export default DarkTheme;