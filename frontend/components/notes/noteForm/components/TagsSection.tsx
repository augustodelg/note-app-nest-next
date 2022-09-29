import { Tag } from "interfaces/tag.type";
import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react";
import { Button, Typography, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TagService from "services/tagService";
import useInput from "hooks/useInput";

interface Props {
  refTags: React.MutableRefObject<Tag[] | undefined>;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function TagsSection(props: Props) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(props.refTags.current ? props.refTags.current : []);
  const [tagsOptions, setTagsOptions] = useState<Tag[]>([]);

  async function getTags() {
    const tags = await TagService.getTags();
    setTagsOptions(tags as Tag[]);
  }

  const [title, titleInput, setTitle] = useInput<string>({
    label: "New tag",
    extraOpt: {
      placeholder: "Name of new tag",
      type: "text",
      sx: { pb: 2 },
    },
  });

  useEffect(() => {
    setSelectedTags(props.refTags.current!)
  }, [props.refTags.current]);

  function handleOnChange(event: any) {
    setSelectedTags(event);
    props.refTags.current = event;
  }

  async function handleSubmit() {
    const result = (await TagService.createTag(title, () => {
      setTitle("");
      getTags();
    })) as Tag;
    setSelectedTags([...selectedTags, result]);
  }

  return (
    <Fragment>
      <Box sx={{ mt: 2 }}>
        
        <Autocomplete
          onOpen={() => getTags()}
          value={selectedTags}
          filterSelectedOptions
          onChange={(event,value) => handleOnChange(value)}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          multiple
          id="checkboxes-tags-demo"
          options={tagsOptions!}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, tagsOptions, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {tagsOptions.name}
            </li>
          )}
          style={{ width: 'auto' }}
          renderInput={(params) => {
            return (
              <TextField {...params} label="Tags" placeholder="Selected Tags" />
            );
          }}
        />
        <Box sx={{ mt: 2 }}>
          {titleInput}
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            sx={{ m: 1 }}
            size="large"
          >
            Add tag
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
}
