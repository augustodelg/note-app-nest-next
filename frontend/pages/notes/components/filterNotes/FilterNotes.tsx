import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Tag } from "interfaces/tag.type";
import { FormEvent, SyntheticEvent, useState } from "react";
import tagService from "services/tagService";
import { useRouter } from "next/router";

interface Props {}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FilterNotes(props: Props) {
  const [tagsOptions, setTagsOptions] = useState<Tag[]>([]);
  const route = useRouter();

  async function getTags() {
    const tags = await tagService.getTags();
    setTagsOptions(tags as Tag[]);
  }

  function handleOnChange(event: Tag| null) {
    route.push(
      `/notes?archived=${route.query.archived}${
        event ? `&tagFilter=${event.id}` : ""
      }`
    );
  }

  return (
    <Autocomplete
      onOpen={() => getTags()}
      onChange={(event, value) => handleOnChange(value)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      id="checkboxes-tags-demo"
      options={tagsOptions!}
      getOptionLabel={(option) => option.name}
      renderOption={(props, tagsOptions, { selected }) => (
        <li {...props}>{tagsOptions.name}</li>
      )}
      style={{ width: "auto" }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Tags"
            placeholder="Selected Tags to Filter"
          />
        );
      }}
    />
  );
}
