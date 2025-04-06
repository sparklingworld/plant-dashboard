// let scene, camera, renderer, model, controls;
// let currentStage = 0;
// const stages = [
//   {
//     title: "Stage 1: Seed",
//     info: "A seed is a plant embryo in a dormant state. It contains nutrients and waits for water, oxygen, and warmth to germinate.",
//     modelPath: "models/seed.glb",
//     scale: 1000},
//   {
//     title: "Stage 2: Stem",
//     info: "The stem emerges, transporting water and nutrients from roots to leaves. It provides structural support.",
//     modelPath: "models/stem.glb",
//     scale: 9
//   },
//   {
//     title: "Stage 3: Leaves",
//     info: "Leaves perform photosynthesis, converting sunlight into energy. They release oxygen and absorb CO2.",
//     modelPath: "models/leaves.glb"
//   },
//   {
//     title: "Stage 4: Flower",
//     info: "Flowers attract pollinators. They contain reproductive organs (pistil and stamen) for producing seeds.",
//     modelPath: "models/flower.glb"
//   },
//   {
//     title: "Stage 5: Forest",
//     info: "A mature tree produces oxygen, stores carbon, and provides habitat for wildlife. It can live for decades!",
//     modelPath: "models/tree.glb"
//   }
// ];

// const stages = [
//     {
//       title: "Stage 1: Seed",
//       info: "A seed is a plant embryo in a dormant state. It contains nutrients and waits for water, oxygen, and warmth to germinate.",
//       modelPath: "models/seed.glb",
//       scale: 1000,
//       facts: [
//         "🌱 Seeds can survive extreme drought for years",
//         "🔥 Some pine cones only release seeds after forest fires",
//         "🕰️ The oldest sprouted seed was from a 2,000-year-old date palm",
//         "🚀 NASA grew space zinnias to study plant growth in microgravity",
//         "🧊 Seed banks preserve biodiversity in vaults like the Svalbard Global Seed Vault"
//       ],
//       duties: [
//         "🌱 Start a seed swap program in your community",
//         "♻️ Use biodegradable seed starters instead of plastic",
//         "💧 Collect rainwater for watering seedlings",
//         "📚 Learn about native seeds in your region",
//         "🏡 Create a small seed library for neighbors"
//       ]
//     },
//     {
//       title: "Stage 2: Stem",
//       info: "The stem emerges, transporting water and nutrients from roots to leaves. It provides structural support.",
//       modelPath: "models/stem.glb",
//       scale: 9,
//       facts: [
//         "🎋 Bamboo holds the record as fastest-growing stem (35in/day)",
//         "🌲 Redwood tree bark can be 1ft thick for fire protection",
//         "🌀 Twining stems like beans rotate clockwise while hops rotate counterclockwise",
//         "💪 Potato tubers are actually modified stems, not roots",
//         "🏗️ The stem's vascular system works like a biological elevator"
//       ],
//       duties: [
//         "🌿 Use natural twine instead of plastic ties for plant support",
//         "✂️ Learn proper pruning techniques to avoid plant stress",
//         "🚯 Never dump chemicals where they can reach plant roots",
//         "📱 Use apps to identify invasive vine species in your area",
//         "🏡 Build trellises from recycled materials"
//       ]
//     },
//     {
//       title: "Stage 3: Leaves",
//       info: "Leaves perform photosynthesis, converting sunlight into energy. They release oxygen and absorb CO2.",
//       modelPath: "models/leaves.glb",
//       scale: 1,
//       facts: [
//         "🍃 A single square millimeter of leaf contains 500,000 chloroplasts",
//         "🍁 Maple leaves change color due to anthocyanin production in fall",
//         "🦎 Some tropical leaves can hold gallons of water in their central pools",
//         "⚡ The electrical potential between a leaf's top and bottom surfaces can reach 100mV",
//         "🛡️ Many leaves have tiny hairs called trichomes for pest defense"
//       ],
//       duties: [
//         "🍂 Compost fallen leaves instead of burning them",
//         "🌳 Plant trees to create urban shade and reduce AC use",
//         "🚫 Avoid leaf blowers - they emit pollutants and destroy habitats",
//         "📷 Document seasonal leaf changes for climate studies",
//         "☕ Use dried leaves for natural teas and dyes"
//       ]
//     },
//     {
//       title: "Stage 4: Flower",
//       info: "Flowers attract pollinators. They contain reproductive organs (pistil and stamen) for producing seeds.",
//       modelPath: "models/flower.glb",
//       scale: 1,
//       facts: [
//         "🌸 Titan arum's flower reaches 10ft tall but smells like rotting meat",
//         "🐝 Flowers evolved ultraviolet patterns invisible to humans but seen by pollinators",
//         "🕰️ Some night-blooming flowers only open for a single evening",
//         "🔥 Fireweed is among the first plants to grow after forest fires",
//         "🎭 Orchids mimic female insects to trick males into pollination"
//       ],
//       duties: [
//         "🐝 Plant pollinator-friendly flowers native to your region",
//         "🚫 Avoid pesticides that harm bees and butterflies",
//         "🏡 Leave some wild areas in gardens for native flowers",
//         "📊 Participate in citizen science pollinator counts",
//         "💐 Choose locally-grown cut flowers over imported ones"
//       ]
//     },
//     {
//       title: "Stage 5: Forest",
//       info: "A mature tree produces oxygen, stores carbon, and provides habitat for wildlife. It can live for decades!",
//       modelPath: "models/tree.glb",
//       scale: 1,
//       facts: [
//         "🌳 A single oak tree can support 2,300 species of organisms",
//         "📏 General Sherman tree contains 52,500 cubic feet of wood",
//         "🔄 Trees share nutrients through underground fungal networks (the 'Wood Wide Web')",
//         "❄️ Bristlecone pines can live over 5,000 years in harsh conditions",
//         "💨 Trees reduce wind speed by up to 85% in shelterbelts"
//       ],
//       duties: [
//         "🌲 Support reforestation organizations like Arbor Day Foundation",
//         "📝 Advocate for urban tree protection laws in your city",
//         "🪓 Use FSC-certified wood products",
//         "📱 Use tree-planting search engines like Ecosia",
//         "👥 Organize community tree-planting events"
//       ]
//     }
//   ];

//   function init() {
//     // Scene setup (your original code)
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xf5f5f5);
//     camera = new THREE.PerspectiveCamera(80, 800 / 700, 0.1, 100);
//     camera.position.z = 1;
//     renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(600, 400);
//     document.getElementById('model-container').appendChild(renderer.domElement);
//     controls = new THREE.OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
  
//     // Lighting
//     const light = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(light);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);
  
//     // Initialize panels
//     initPanels();
//     loadModel(stages[currentStage].modelPath);
//     document.getElementById('next-btn').addEventListener('click', nextStage);
//     animate();
//   }
  
//   // Panel system with animation
//   function initPanels() {
//     // Set initial content
//     updatePanelContent();
    
//     // Auto-rotate facts/duties every 8 seconds
//     setInterval(updatePanelContent, 8000);
    
//     // Manual refresh buttons
//     document.getElementById('refresh-fact').addEventListener('click', updatePanelContent);
//     document.getElementById('refresh-duty').addEventListener('click', updatePanelContent);
//   }
  
//   function updatePanelContent() {
//     // Stage-specific facts or general facts
//     const facts = stages[currentStage].facts || generalPlantFacts;
//     const duties = stages[currentStage].duties || environmentalDuties;
    
//     // Animate fact change
//     const factElement = document.getElementById('plant-fact');
//     factElement.style.opacity = 0;
//     setTimeout(() => {
//       factElement.textContent = facts[Math.floor(Math.random() * facts.length)];
//       factElement.style.opacity = 1;
//     }, 500);
    
//     // Animate duty change
//     const dutyElement = document.getElementById('human-duty');
//     dutyElement.style.opacity = 0;
//     setTimeout(() => {
//       dutyElement.textContent = duties[Math.floor(Math.random() * duties.length)];
//       dutyElement.style.opacity = 1;
//     }, 500);
//   }
  
//   // Your original model loading function
//   function loadModel(path) {
//     const loader = new THREE.GLTFLoader();
//     loader.load(
//       path,
//       (gltf) => {
//         if (model) scene.remove(model);
//         model = gltf.scene;
//         model.scale.set(stages[currentStage].scale || 1, stages[currentStage].scale || 1, stages[currentStage].scale || 1);
//         model.position.y = -0.5;
//         scene.add(model);
//         updatePanelContent(); // Refresh panels when model changes
//       },
//       undefined,
//       (error) => console.error('Error loading model:', error)
//     );
//   }
  
//   // Your original stage cycling function
//   function nextStage() {
//     currentStage = (currentStage + 1) % stages.length;
//     document.getElementById('stage-title').textContent = stages[currentStage].title;
//     document.getElementById('stage-info').textContent = stages[currentStage].info;
//     loadModel(stages[currentStage].modelPath);
//   }
  
//   // Your original animation loop
//   function animate() {
//     requestAnimationFrame(animate);
//     if (model) model.rotation.y += 0.005;
//     controls.update();
//     renderer.render(scene, camera);
//   }
  
//   // Start the app
//   init();

// // Initialize Three.js scene
// function init() {
//   // Scene
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xf5f5f5);

//   // Camera
//   camera = new THREE.PerspectiveCamera(80, 800 / 700, 0.1, 100);
//   camera.position.z = 1;

//   // Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setSize(600, 400);
//   document.getElementById('model-container').appendChild(renderer.domElement);

//   // Controls (allow rotation)
//   controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.enableZoom = false;

//   // Lighting
//   const light = new THREE.AmbientLight(0xffffff, 0.5);
//   scene.add(light);
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
//   directionalLight.position.set(1, 1, 1);
//   scene.add(directionalLight);

//   // Load initial model
//   loadModel(stages[currentStage].modelPath);

//   // Button event listener
//   document.getElementById('next-btn').addEventListener('click', nextStage);

//   // Animation loop
//   animate();
// }

// // Load 3D model
// function loadModel(path) {
//   const loader = new THREE.GLTFLoader();
//   loader.load(
//     path,
//     (gltf) => {
//       if (model) scene.remove(model); // Remove previous model
//       model = gltf.scene;
      
//       if (currentStage === 0 || currentStage === 1) {
//         model.scale.set(5, 5, 5); // Bigger scale for seed and stem
//       } else {
//         model.scale.set(1, 1, 1); // Default scale for other stages
//       }

//       // Center the model (optional)
//       model.position.y = -0.5; // Adjust vertical position if needed


//       scene.add(model);
//     },
//     undefined,
//     (error) => {
//       console.error('Error loading model:', error);
//     }
//   );
// }

// // Cycle to next stage
// function nextStage() {
//   currentStage = (currentStage + 1) % stages.length;
//   document.getElementById('stage-title').textContent = stages[currentStage].title;
//   document.getElementById('stage-info').textContent = stages[currentStage].info;
//   loadModel(stages[currentStage].modelPath);
// }

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   if (model) model.rotation.y += 0.005; // Slow rotation
//   controls.update();
//   renderer.render(scene, camera);
// }


// // Start the app
// init();