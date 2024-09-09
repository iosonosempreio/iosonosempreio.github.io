---
title: Using OpenAI GPT in Google Sheets
date: "2024-09-08"
images: [
  "spreadsheet-preview-and-settings.png",
  "batch-prmpting-with-settings.png",
  "batch-prompting-dynamic-prompt.png",
  "simple-prompting.png"
]
---

This template allows you to use OpenAI’s GPT models within a Google Spreadsheet. It’s designed for batch querying, making it ideal if you need to send similar prompts to a generative AI multiple times. It can be useful when studying how a model behaves across various inputs, comparing results of different models, or when streamlining the process of compiling datasets.

![OpenAI GPTs in Google Spreadsheet v0.2](/images/experiments/gpt-spreadsheets/spreadsheet-preview-and-settings.png "A spreadsheet to do batch prompting on a generative AI")

Access the spreadsheet from here: [OpenAI GPTs in Google Spreadsheet v0.2](https://docs.google.com/spreadsheets/d/19TTWVTxEupF1xlb4OYN8QwMKXd4IPaS2S78OwcFN2-s/edit?gid=0#gid=0). To use it you need to duplicate the template, provide your OpenAI API key (which you can get from OpenAI’s website), and use a custom function called `PROMPT_GPT`.

A valid API key can be requested from your OpenAI account at [platform.openai.com/api-keys](https://platform.openai.com/api-keys). API usage limits are described [at this page](https://platform.openai.com/docs/guides/rate-limits/usage-tiers), you'll probably need to buy some credit and move at least to Tier 1.

![Simple prompting](/images/experiments/gpt-spreadsheets/simple-prompting.png "A screenshot of a spreadsheet that uses a custom function to prompt a generative AI")

This setup is text-only at the moment, so it doesn’t support image generation, but for text-based tasks can help save time. You can provide a list of prompts (previous image) or compose the prompts dynamically according to data using `CONCATENATE` (next image). If you need to force the spreadsheet to recalculate a cell, simply delete its contents and undo the action.

![Dynamic prompting](/images/experiments/gpt-spreadsheets/batch-prompting-dynamic-prompt.png "A screenshot similar to the previous one but showing creating dynamic prompts using data in the spreadsheet")


#### How to use it
`=PROMPT_GPT(prompt, [system content, [model, [temperature]]])`

The custom function accepts the following parameters. If not set, the function uses the default values set in the first sheet.
- **Prompt**: your prompt for the model (mandatory).
- **System Content**: provides the model with guidance on how it should behave throughout the generation. It influences the tone, behavior, and boundaries for the model’s responses (optional).
- **Model**: must be a model supported by the endpoint */v1/chat/completions* as indicated [at this page](https://platform.openai.com/docs/models/model-endpoint-compatibility): «All GPT-4o, GPT-4o-mini, GPT-4, and GPT-3.5 Turbo models and their dated releases. chatgpt-4o-latest dynamic model. Fine-tuned versions of gpt-4o, gpt-4o-mini, gpt-4, and gpt-3.5-turbo»
- **Temperature**: a parameter that controls the randomness (or creativity?) of the model’s responses. A value close to 0 makes the model’s output more focused, deterministic, and predictable; this is useful when you want "clear", "precise", and "factual" answers, such as when you’re querying for "straightforward information". A value above 1 increases the randomness of the output, making it more creative or varied, leading to more diverse and unexpected responses; it’s useful when you want more creative or exploratory text generation, such as for storytelling or brainstorming. Values close to 2 may result in unreadable outputs.