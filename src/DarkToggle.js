import { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  setFetchMethod,
} from "darkreader";

import "./DarkToggle.css";

export const DarkToggle = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handlePreferredColorSchemeChange = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  setFetchMethod(window.fetch);

  useEffect(() => {
    if (isDarkModeEnabled) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, [isDarkModeEnabled]);

  return (
    <Checkbox
      toggle
      className="modeSwitchToggle"
      onChange={handlePreferredColorSchemeChange}
      checked={isDarkModeEnabled}
      style={{ marginTop: "3em" }}
    />
  );
};
