export interface ConfigNavbarElement {
    title: string;
    elements: JSX.Element[];
  }
  
export interface ConfigNavbar {
    archived: ConfigNavbarElement;
    unarchived: ConfigNavbarElement;
  }
  