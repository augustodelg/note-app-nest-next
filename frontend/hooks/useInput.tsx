import TextField from "@mui/material/TextField";
import { useState } from "react";

interface Params<T> {
  value?: T;
  label?: string;
  extraOpt: Object;
}
export default function useInput<T>(params: Params<T>) {
  const [value, setValue] = useState<T>(
    params.value ? params.value : (null as unknown as T)
  );
  const input = (
    <TextField
      label={params.label}
      value={value}
      onChange={(e) => setValue(e.target.value as T)}
      {...params.extraOpt}
    />
  );
  // Change as any
  return [value, input as any, setValue];
}
