# Screenshot To React Component
This repotiotry is inspired by [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code).

### Usage
You can execute the script by specifying the first argument as the image path and 
the second argument as the path for the generated component.

```
poetry run python src/main.py notes/data/component_screenshot.png src/components/Component.tsx
```

### Check the component on Next.js
You can use Next.js to check a component created by GPT-4.

```
cd nextjs-project
docker compose up
```
