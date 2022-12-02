import { sizes } from "./types";


export const getSizeProps = (size: sizes ) => {
  switch (size) {
    case "small":
      return {
        fontSize: "12px",
        padding: "0.5rem 1rem",
      };
    case "medium":
      return {
        fontSize: "15px",
        padding: "0.8rem 2rem",
      };
    case "large":
      return {
        fontSize: "18px",
        padding: "1rem 2.5rem",
      };
  }
}

export const getVariantProps = (variant: string) => {
    switch (variant) {
        case "primary":
        return {
            bgColor: "#007bff",
            textColor: "#fff",
        };
        case "secondary":
        return {
            bgColor: "#6c757d",
            textColor: "#fff",
        };
        case "tertiary":
        return {
            bgColor: "#28a745",
            textColor: "#fff",
        };
        case "danger":
        return {
            bgColor: "#dc3545",
            textColor: "#fff",
        };
        case "success":
        return {
            bgColor: "#28a745",
            textColor: "#fff",
        };
        case "warning":
        return {
            bgColor: "#ffc107",
            textColor: "#fff",
        };
        case "info":
        return {
            bgColor: "#17a2b8",
            textColor: "#fff",
        };
        case "light":
        return {
            bgColor: "#f8f9fa",
            textColor: "#000",
        };
        case "dark":
        return {
            bgColor: "#343a40",
            textColor: "#fff",
        };
        case "link":
        return {
            bgColor: "transparent",
            textColor: "#007bff",
        };
    }
    }