  // Format date from "2025-04-15 10:48" to "15 Apr, 2025"
 export const formatDate = (dateString: string) => {
    if (!dateString) return "";

    try {
      const [datePart] = dateString.split(" ");
      const date = new Date(datePart);

      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };

      return date.toLocaleDateString("en-US", options).replace(",", "");
    } catch (error) {
      return dateString;
    }
  };