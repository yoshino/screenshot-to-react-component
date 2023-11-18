# Screenshot To React Component
This repotiotry is inspired by [abi/screenshot-to-code](https://github.com/abi/screenshot-to-code).

From a screenshot of the Amazon search bar, 
![component_screenshot](https://github.com/yoshino/screenshot-to-react-component/assets/17586662/d145d0ea-7825-4645-92b0-11be089982e3)

you can create the following React Component (with TypeScript).


![result](https://github.com/yoshino/screenshot-to-react-component/assets/17586662/dd5239ef-3466-45bc-9eed-19cdf224eda8)

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
