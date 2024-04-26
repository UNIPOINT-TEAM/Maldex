/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react";

type Template = any;
interface IAppContext {
  isMobile: boolean | undefined;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  templates: Template[];
  setTemplates: (templates: Template[]) => void;
  uploads: any[];
  setUploads: (templates: any[]) => void;
  shapes: any[];
  setShapes: (templates: any[]) => void;
  activeSubMenu: string | null;
  setActiveSubMenu: (option: string) => void;
  currentTemplate: any;
  setCurrentTemplate: any;
}

export const AppContext = createContext<IAppContext>({
  isMobile: false,
  setIsMobile: () => {},
  templates: [],
  setTemplates: () => {},
  uploads: [],
  setUploads: () => {},
  shapes: [],
  setShapes: () => {},
  activeSubMenu: null,
  // @ts-expect-error: This         
  setActiveSubMenu: (value: string) => {},
  currentTemplate: {},
  setCurrentTemplate: {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [uploads, setUploads] = useState<any[]>([]);
  const [shapes, setShapes] = useState<Template[]>([]);

  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const context = {
    isMobile,
    setIsMobile,
    templates,
    setTemplates,
    shapes,
    setShapes,
    activeSubMenu,
    setActiveSubMenu,
    uploads,
    setUploads,
    currentTemplate,
    setCurrentTemplate,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
