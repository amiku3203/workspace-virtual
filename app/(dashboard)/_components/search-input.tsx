"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounceValue = useDebounceValue(value, 500);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Ensure debounceValue is always a string before passing to qs.stringifyUrl
    const queryString = debounceValue ? { search: debounceValue.toString() } : undefined;

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: queryString,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
