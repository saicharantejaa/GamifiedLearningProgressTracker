export const xpPerTopic = 10;

export const subjects = [
  {
    "id": "maths",
    "name": "Maths",
    "color": "#176b87",
    "topics": [
      {
        "title": "Introduction to Algebra",
        "explanation": "Algebra is a fundamental branch of mathematics where we use letters, symbols, and variables to represent numbers and unknown quantities in formulas and equations. Instead of always working with fixed, known numbers, algebra lets us write general rules and relationships that apply across many different situations and values. For example, we can write a single formula once and reuse it for any number we substitute in. This powerful idea means we can solve real-world problems without knowing all the values upfront. Algebra forms the foundation of advanced mathematics including calculus, statistics, and linear algebra, and is used constantly in science, engineering, computer programming, finance, and everyday problem-solving. Learning algebra teaches logical thinking, pattern recognition, and the ability to model real situations mathematically.",
        "keyPoints": [
          "Variables like x and y are placeholders that represent unknown or changing numbers in expressions and equations.",
          "Expressions combine numbers, variables, and mathematical operations like addition, subtraction, multiplication, and division.",
          "Equations are mathematical statements showing that two expressions are equal, and solving them means finding what value makes that balance true."
        ],
        "example": "If you have 3 apples and someone gives you x more apples, the total is represented as 3 + x. If you are told the total is 7, you can set up the equation 3 + x = 7 and solve it by subtracting 3 from both sides, giving x = 4. This process of isolating the unknown variable is the core skill of algebra.",
        "quiz": {
          "question": "In the equation 2x = 10, what is the value of x?",
          "options": [
            "2",
            "5",
            "10",
            "20"
          ],
          "answer": "5"
        },
        "xp": 10
      },
      {
        "title": "Fractions and Decimals",
        "explanation": "Fractions represent parts of a whole object or a quantity and are written as one number divided by another. The top number is called the numerator, which tells you how many parts you have, and the bottom number is called the denominator, which tells you how many equal parts the whole has been divided into. For instance, 3/8 means you have 3 parts out of 8 equal parts in total. Decimals are simply another way to express the same idea of partial quantities, using the base-10 place value system, where each position to the right of the decimal point represents tenths, hundredths, thousandths, and so on. Both fractions and decimals appear constantly in real life — cooking recipes use fractions for measurements, shop prices use decimals, and sports statistics use both. Being able to convert between fractions and decimals fluently, and to perform arithmetic with each, is a core skill in mathematics that supports every other topic from percentages to algebra.",
        "keyPoints": [
          "A fraction like 3/4 means three parts out of four equal parts, where 3 is the numerator and 4 is the denominator.",
          "Decimals use a decimal point to separate the whole number part from the fractional part, based on powers of ten.",
          "Common conversions to memorize: 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75, 1/5 = 0.2, and 1/10 = 0.1."
        ],
        "example": "Imagine a pizza that is cut into 8 equal slices. If you eat 3 slices, you have eaten 3/8 of the pizza as a fraction. To convert this to a decimal, divide 3 by 8, giving 0.375. Conversely, if a recipe requires 0.5 cups of sugar, you can express this as the fraction 1/2 cup, which may be easier to measure.",
        "quiz": {
          "question": "What is 3/4 expressed as a decimal?",
          "options": [
            "0.25",
            "0.50",
            "0.75",
            "1.00"
          ],
          "answer": "0.75"
        },
        "xp": 10
      },
      {
        "title": "Geometry Basics",
        "explanation": "Geometry is the branch of mathematics dedicated to studying the properties, measurements, and relationships of shapes, sizes, angles, and figures in both two-dimensional and three-dimensional space. From the triangles and circles we draw on paper to the cubes, spheres, and cylinders we see in the physical world, geometry describes the structure of the environment around us. Architects rely on geometry to design safe and beautiful buildings. Engineers use it to plan roads and bridges. Artists use geometric principles to create perspective and proportion in their work. Even video games and animations are built on geometric calculations. Understanding basic geometric shapes, their properties, and the formulas for measuring them is an essential foundation that supports physics, engineering, art, and advanced mathematical study.",
        "keyPoints": [
          "A triangle always has 3 sides and 3 interior angles, and those angles always add up to exactly 180 degrees regardless of the triangle's shape or size.",
          "A circle is uniquely defined by its center point and its radius, which is the distance from the center to any point on the circle's edge.",
          "Perimeter is the total length of all the outer edges of a shape, while area measures the amount of flat surface space enclosed inside the shape's boundaries."
        ],
        "example": "Consider a rectangle with a length of 6 cm and a width of 4 cm. Its perimeter is calculated by adding all four sides: 6 + 4 + 6 + 4 = 20 cm. Its area is calculated by multiplying length by width: 6 × 4 = 24 square centimetres. If you needed to frame the rectangle, you would need 20 cm of frame material; if you needed to tile it, you would need 24 square centimetres of tiles.",
        "quiz": {
          "question": "What is the area of a rectangle with length 5 cm and width 3 cm?",
          "options": [
            "8 cm",
            "15 cm",
            "16 cm",
            "20 cm"
          ],
          "answer": "15 cm"
        },
        "xp": 10
      },
      {
        "title": "Statistics and Probability",
        "explanation": "Statistics is the science of collecting, organizing, analyzing, and interpreting numerical data to draw meaningful conclusions about the world. It allows us to summarize large sets of information using measures like the mean (average), median (middle value), and mode (most frequent value). Probability, closely related to statistics, is the mathematical study of how likely events are to occur. It is expressed as a number between 0 and 1, where 0 means an event is impossible and 1 means it is certain. Together, statistics and probability are used in virtually every field: doctors use them to evaluate treatments, businesses use them to forecast sales, meteorologists use them to predict weather, and sports analysts use them to assess performance. These concepts are the backbone of data science, artificial intelligence, and scientific research.",
        "keyPoints": [
          "The mean (average) is calculated by adding all values in a dataset together and dividing by how many values there are.",
          "The probability of an event occurring equals the number of favorable outcomes divided by the total number of possible outcomes.",
          "A probability value of 0 means the event is impossible, while a value of 1 means the event is absolutely certain to happen."
        ],
        "example": "Suppose a class of 5 students scored 60, 70, 75, 85, and 90 on a test. The mean score is (60+70+75+85+90) ÷ 5 = 380 ÷ 5 = 76. For probability: when rolling a standard six-sided die, the probability of rolling a number greater than 4 is 2/6 (since 5 and 6 qualify), which simplifies to 1/3 or approximately 0.33.",
        "quiz": {
          "question": "What is the mean of 4, 6, 8, and 10?",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": "7"
        },
        "xp": 10
      },
      {
        "title": "Linear Equations and Graphs",
        "explanation": "A linear equation is any equation that, when plotted on a coordinate plane, produces a perfectly straight line. The standard form is y = mx + c, where m represents the slope or gradient of the line (how steeply it rises or falls), and c represents the y-intercept (the exact point where the line crosses the vertical y-axis). The slope tells you the rate of change — for every one unit you move to the right along the x-axis, the y value increases by m units. Graphs allow us to visualize relationships between two variables in a clear and intuitive way, making it easy to spot trends, intersections, and patterns. Linear equations model countless real-world scenarios such as calculating a phone bill based on minutes used, predicting how far a car travels at constant speed, or figuring out profit based on units sold. Mastering linear equations and their graphs is a critical stepping stone to understanding more advanced topics like systems of equations, quadratic functions, and calculus.",
        "keyPoints": [
          "The slope m in y = mx + c determines how steep the line is and whether it goes upward (positive slope) or downward (negative slope) from left to right.",
          "The y-intercept c is the value of y when x = 0, which is the point where the line crosses the y-axis on a graph.",
          "Any relationship that changes at a constant rate can be modeled as a linear equation and will always appear as a straight line when graphed."
        ],
        "example": "Consider the equation y = 2x + 3. When x = 0, y = 3 (the y-intercept). When x = 1, y = 5. When x = 3, y = 9. Plotting these points and drawing a line through them shows a straight line with a slope of 2, meaning for every step you move right, the line rises by 2 units. If this represented a taxi fare where 3 is the base charge and 2 is the cost per kilometre, you could predict the fare for any distance.",
        "quiz": {
          "question": "In y = 3x + 2, what is the value of y when x = 2?",
          "options": [
            "6",
            "7",
            "8",
            "10"
          ],
          "answer": "8"
        },
        "xp": 10
      },
      {
        "title": "Introduction to Fractions",
        "explanation": "Fractions are a way to represent and work with parts of a whole object or a group of items. Whenever something is divided into equal pieces, each piece can be expressed as a fraction of the entire thing. A fraction is made up of two main numbers separated by a horizontal line called a vinculum. The number written above the line is called the numerator, and it tells us exactly how many equal parts we are currently referring to or counting. The number written below the line is called the denominator, and it reveals the total number of equal parts that the whole thing has been divided into. For instance, the fraction 5/8 tells you that the whole was cut into 8 equal pieces and you are concerned with 5 of those pieces. Fractions are everywhere in daily life — we use them to measure ingredients in a kitchen, to split a restaurant bill fairly among friends, to understand sale discounts in a shop, and to read map scales. A strong understanding of fractions also makes learning decimals, percentages, ratios, and algebra significantly easier.",
        "keyPoints": [
          "Fractions represent equal parts of a whole object or group, telling us how many of those equal parts are being considered.",
          "The numerator on top shows the number of parts being counted or selected.",
          "The denominator on the bottom shows the total number of equal parts the whole has been divided into."
        ],
        "example": "If you cut a whole pizza into 4 equal slices and eat 1 slice, you have eaten 1/4 (one-fourth) of the pizza. If you then eat another slice, you have eaten 2/4 which simplifies to 1/2 (one-half) of the pizza. The denominator 4 tells you the pizza had 4 equal slices total, and the numerator tells you how many you consumed.",
        "quiz": {
          "question": "In the fraction 3/4, what is the number 3 called?",
          "options": [
            "Denominator",
            "Numerator",
            "Whole number",
            "Decimal"
          ],
          "answer": "Numerator"
        },
        "xp": 10
      },
      {
        "title": "Understanding Percentages",
        "explanation": "Percentages are a standardized way to express numbers as a fraction of 100, making comparisons between different quantities extremely simple and intuitive. The word 'percent' comes from the Latin phrase 'per centum', which literally means 'per hundred' or 'out of one hundred'. It is always represented with the symbol '%'. The great advantage of percentages is that they place all quantities onto the same scale of 100, allowing you to compare figures that originally came from very different totals. For example, scoring 36 out of 40 on one test and 55 out of 75 on another is hard to compare directly. Converting both to percentages (90% vs approximately 73%) makes the comparison immediately clear. We encounter percentages everywhere in modern life: store discounts show prices reduced by a certain percent, phone and laptop battery levels display as a percentage, interest rates on bank accounts are given as annual percentages, nutrition labels show percentage of daily recommended values, and election results are reported as percentages of total votes cast.",
        "keyPoints": [
          "Percentage means parts per hundred and is always written with the '%' symbol after the number.",
          "They allow easy comparison between different quantities by expressing them all on a common scale of 100.",
          "A complete whole item or total amount is always represented as 100%, while half is 50%, a quarter is 25%, and nothing is 0%."
        ],
        "example": "If a video game is downloading and has finished 50 out of 100 megabytes, the progress is 50%. If a shop is offering a 20% discount on a shirt originally priced at 500 rupees, you calculate the discount as (20/100) × 500 = 100 rupees. The sale price is therefore 500 − 100 = 400 rupees. Understanding this calculation saves you money in real shopping situations.",
        "quiz": {
          "question": "What is another way to write the fraction 25/100 as a percentage?",
          "options": [
            "2.5%",
            "250%",
            "25%",
            "0.25%"
          ],
          "answer": "25%"
        },
        "xp": 10
      },
      {
        "title": "Basic Ratios",
        "explanation": "A ratio is a mathematical tool for making a direct comparison between two or more numbers or quantities, showing their relative sizes in relation to each other. It answers the question of how much of one thing there is compared to another thing. Ratios can be written in several equivalent ways: using the word 'to' (as in 3 to 2), using a colon symbol (as in 3:2), or as a fraction (as in 3/2). All three formats represent exactly the same comparison. Ratios are essential in many practical situations where you must maintain a specific proportion or balance between ingredients or components. When a baker follows a recipe, they use ratios to ensure the correct balance of flour to butter. When mixing paint colors, an artist uses ratios to achieve a consistent shade. Engineers use ratios when creating scaled models, and pharmacists use ratios when diluting medicines. Understanding that the order in which numbers are written in a ratio matters critically — a ratio of 3:2 is different from a ratio of 2:3.",
        "keyPoints": [
          "Ratios compare two or more quantities to clearly show their relative sizes and relationship to each other.",
          "They can be expressed using a colon (a:b), as a fraction (a/b), or using the word 'to' (a to b) — all are equivalent.",
          "The order of numbers in a ratio is critically important and must match the order described in the problem context."
        ],
        "example": "If a basket contains 3 apples and 2 bananas, the ratio of apples to bananas is 3:2. This means for every 3 apples, there are 2 bananas. If you had 6 apples, you would need 4 bananas to maintain the same ratio. Ratios can also be simplified: a ratio of 6:4 simplifies to 3:2 by dividing both numbers by their greatest common factor of 2.",
        "quiz": {
          "question": "If a classroom has 5 boys and 6 girls, what is the ratio of boys to girls?",
          "options": [
            "6:5",
            "5:6",
            "5:11",
            "11:5"
          ],
          "answer": "5:6"
        },
        "xp": 10
      },
      {
        "title": "Negative Numbers",
        "explanation": "Negative numbers are all values that are strictly less than zero, and they are always written with a minus sign (−) placed directly in front of them, such as −1, −5, or −100. You can think of negative numbers as the mirror image or opposite of positive numbers on a number line. On a standard horizontal number line, the number zero sits at the center, positive numbers extend to the right of zero, and negative numbers extend to the left of zero. The further left a number is on the number line, the smaller (more negative) its value. Negative numbers arise naturally in many real-world contexts. Bank account balances go negative when you spend more than you have, creating debt. Temperatures drop below zero in cold climates and are recorded as negative Celsius values. Elevations below sea level such as the Dead Sea are described using negative numbers. Profits that turn into losses in business are shown as negative figures. Understanding how to compare, add, subtract, multiply, and divide negative numbers is essential for algebra, physics, economics, and everyday financial literacy.",
        "keyPoints": [
          "Negative numbers are all values that are strictly less than zero and are always written with a minus sign (−) in front.",
          "On a number line, negative numbers are positioned to the left of zero, with more negative numbers placed further to the left.",
          "When comparing negative numbers, the one closer to zero is actually the larger value (for example, −2 is greater than −7)."
        ],
        "example": "If the temperature outside drops three degrees below zero, it is recorded as −3°C. If it then drops a further 4 degrees, the new temperature is −3 − 4 = −7°C. Conversely, if the temperature rises by 10 degrees from −7°C, it becomes −7 + 10 = +3°C, which is above freezing. This kind of calculation is used daily in weather forecasting around the world.",
        "quiz": {
          "question": "Which of the following numbers is the smallest value?",
          "options": [
            "0",
            "5",
            "-2",
            "-7"
          ],
          "answer": "-7"
        },
        "xp": 10
      },
      {
        "title": "Perimeter and Area",
        "explanation": "Perimeter and area are two of the most fundamental and widely used measurements in geometry, each describing a different physical property of two-dimensional shapes. The perimeter of a shape is the total distance measured along its outer boundary or edge — it is essentially the total length of the shape's outline. Imagine wrapping a piece of string around the outside of a shape; the length of string needed is its perimeter. Area, by contrast, measures the total amount of flat, two-dimensional space that is enclosed inside the shape's boundaries. Area is always expressed in square units such as square centimetres (cm²) or square metres (m²). Understanding the difference between perimeter and area is crucial in many real-world tasks. A builder needs to know the perimeter of a room to estimate how much skirting board is required, but needs the area to calculate how many floor tiles to purchase. A farmer calculates the perimeter of a field to determine how much fencing to buy, but calculates the area to know how much fertiliser to spread. These two measurements together give a complete picture of a shape's size.",
        "keyPoints": [
          "Perimeter is the total distance measured all the way around the outer edge of a shape, calculated by adding all side lengths together.",
          "Area is the total amount of flat surface space enclosed within the boundaries of a shape, always expressed in square units.",
          "Perimeter uses simple linear units (like cm or m), while area uses square units (like cm² or m²) because it covers a two-dimensional space."
        ],
        "example": "A rectangular garden has a length of 8 metres and a width of 5 metres. To find the perimeter, add all four sides: 8 + 5 + 8 + 5 = 26 metres of fencing required. To find the area, multiply length by width: 8 × 5 = 40 square metres of grass to maintain. If you wanted to lay paving stones that each cover 1 square metre, you would need exactly 40 of them.",
        "quiz": {
          "question": "What is the perimeter of a rectangle with a length of 5 cm and a width of 3 cm?",
          "options": [
            "15 cm",
            "16 cm",
            "8 cm",
            "30 cm"
          ],
          "answer": "16 cm"
        },
        "xp": 10
      }
    ]
  },
  {
    "id": "science",
    "name": "Science",
    "color": "#24a67a",
    "topics": [
      {
        "title": "The Scientific Method",
        "explanation": "The scientific method is a carefully structured, step-by-step process that scientists use to investigate questions about the natural world in a logical, objective, and repeatable way. It begins with an observation — noticing something interesting or unexplained in the world around you. From that observation, you form a hypothesis, which is a clear, testable, and falsifiable prediction about why that observation occurs. Next, you design a controlled experiment to test your hypothesis, making sure to only change one variable at a time while keeping all other conditions the same. You collect data carefully during the experiment, then analyze that data to spot patterns or trends. Finally, you draw evidence-based conclusions that either support or refute your original hypothesis. If the hypothesis is not supported, you revise it and test again. The scientific method ensures that discoveries are reliable, unbiased, and reproducible by other scientists around the world. It is the backbone of all scientific progress throughout human history.",
        "keyPoints": [
          "A hypothesis is a specific, testable, and falsifiable prediction formulated before running an experiment to explain an observation.",
          "Variables must be carefully controlled in an experiment — only one variable is changed at a time — to ensure a fair and valid test.",
          "Conclusions must be based entirely on collected evidence and observed data, never on personal opinions, assumptions, or wishful thinking."
        ],
        "example": "You observe that plants near a sunlit window grow taller than plants in a darker corner of the room. Your hypothesis is: plants grow taller when exposed to more sunlight. To test this, you take six identical plants of the same species, age, and size and place two in bright sunlight, two in moderate light, and two in low light. You keep all other variables — water, soil, temperature, and pot size — identical. After four weeks, you measure the height of each plant. If the sunny plants are consistently taller, your hypothesis is supported by evidence.",
        "quiz": {
          "question": "What is the first step in the scientific method?",
          "options": [
            "Form a hypothesis",
            "Conduct an experiment",
            "Make an observation",
            "Draw a conclusion"
          ],
          "answer": "Make an observation"
        },
        "xp": 10
      },
      {
        "title": "Cells Building Blocks of Life",
        "explanation": "Cells are the smallest structural and functional units of all living organisms, making them the fundamental building blocks of life. Every living thing on Earth — from the tiniest bacterium to the largest blue whale — is composed of one or more cells. Some organisms, called unicellular organisms, consist of just a single cell that performs all life functions independently. Examples include bacteria, yeast, and amoebae. Most plants and animals, including humans, are multicellular organisms made up of trillions of specialized cells that work together in coordinated ways. There are two major categories of cells. Prokaryotic cells are simpler, smaller cells that have no membrane-bound nucleus — bacteria are the most well-known example. Eukaryotic cells are larger and more complex, containing a true nucleus that houses the cell's genetic material (DNA), as well as various other membrane-bound organelles that perform specific functions. Every cell, regardless of type, carries out essential life processes including converting nutrients into energy, responding to its environment, growing, reproducing, and communicating with neighboring cells.",
        "keyPoints": [
          "The nucleus is the control center of a eukaryotic cell, containing the cell's DNA and directing all cellular activities and reproduction.",
          "The cell membrane is a thin, flexible barrier surrounding every cell that carefully regulates what substances enter and exit the cell.",
          "Plant cells differ from animal cells in having a rigid cell wall for structural support and chloroplasts for performing photosynthesis."
        ],
        "example": "Consider a human red blood cell. Its primary job is to transport oxygen from the lungs to every tissue in the body. Fascinatingly, mature red blood cells actually lack a nucleus — this unusual adaptation allows each cell to pack in more hemoglobin, the specialized protein that binds to oxygen molecules and carries them. This is a perfect example of how a cell's structure is precisely tailored to its specific function within a living organism.",
        "quiz": {
          "question": "Which part of the cell controls its activities?",
          "options": [
            "Cell membrane",
            "Mitochondria",
            "Nucleus",
            "Cell wall"
          ],
          "answer": "Nucleus"
        },
        "xp": 10
      },
      {
        "title": "Forces and Motion",
        "explanation": "A force is any push or pull that acts upon an object, and forces are fundamental to understanding all movement and change in the physical universe. Forces can cause stationary objects to begin moving, cause moving objects to speed up or slow down, and can change the direction in which an object travels. They can also deform objects by changing their shape. Sir Isaac Newton formulated three Laws of Motion in the 17th century that remain the cornerstone of classical mechanics. Newton's First Law (the Law of Inertia) states that an object at rest will remain at rest, and an object in motion will continue moving at the same speed and direction, unless acted upon by an external force. Newton's Second Law establishes the mathematical relationship F = ma, meaning force equals mass multiplied by acceleration — a heavier object requires more force to accelerate at the same rate. Newton's Third Law states that for every action force, there is an equal and opposite reaction force. These laws explain everything from why you need to wear a seatbelt to how rockets propel themselves into space.",
        "keyPoints": [
          "Force is measured in units called Newtons (N), named after Sir Isaac Newton who formulated the foundational laws of motion.",
          "Friction is a resistive force that opposes the relative motion between two surfaces in contact, converting kinetic energy into heat.",
          "According to Newton's Second Law (F = ma), the greater the mass of an object, the more force is required to achieve the same acceleration."
        ],
        "example": "Consider pushing a shopping trolley at a supermarket. An empty trolley starts moving easily with a small push because its mass is low and friction is minimal. A fully loaded trolley is much harder to start moving because its greater mass resists acceleration (Newton's Second Law). Once moving, it is also harder to stop — that is inertia (Newton's First Law). When you push it forward, the ground pushes back on the wheels in the opposite direction — that is Newton's Third Law in action.",
        "quiz": {
          "question": "Which of Newton's laws states that every action has an equal and opposite reaction?",
          "options": [
            "First Law",
            "Second Law",
            "Third Law",
            "Law of Gravity"
          ],
          "answer": "Third Law"
        },
        "xp": 10
      },
      {
        "title": "The Water Cycle",
        "explanation": "The water cycle, also known as the hydrological cycle, describes the continuous, never-ending movement of water through Earth's atmosphere, oceans, land, and living organisms. This cycle is driven primarily by energy from the Sun and by the force of gravity. The journey of water through the cycle involves several key processes that constantly recycle the same water molecules that have existed on Earth for billions of years. Evaporation occurs when solar heat energy causes liquid water in oceans, lakes, and rivers to transform into water vapor, which rises into the atmosphere. Plants also release water vapor through their leaves in a process called transpiration. As water vapor rises and cools at higher altitudes, it undergoes condensation, grouping together around tiny dust particles to form the water droplets that make up clouds and fog. Eventually, when water droplets in clouds become large and heavy enough, they fall back to Earth's surface as precipitation — this includes rain, snow, sleet, and hail. The returned water collects in rivers, lakes, and underground aquifers, and the entire cycle begins again. The water cycle is essential for distributing fresh water across the planet and sustaining all forms of life.",
        "keyPoints": [
          "Evaporation is the process by which liquid water is converted into water vapor through the absorption of heat energy from the Sun.",
          "Condensation is the process by which rising water vapor cools and transforms back into liquid water droplets, forming clouds and fog.",
          "Precipitation is the stage where water falls from clouds back to Earth's surface in the form of rain, snow, sleet, or hail."
        ],
        "example": "After a heavy rainstorm, you notice puddles on the road. On a warm, sunny afternoon, those puddles gradually disappear — this is evaporation at work, as solar heat converts the liquid water into invisible water vapor that rises into the atmosphere. That vapor eventually cools, condenses around tiny airborne particles, and forms new clouds. Those clouds may travel hundreds of kilometres before the droplets grow heavy enough to fall as rain again over a different city or region.",
        "quiz": {
          "question": "What is the process of water vapor turning into clouds called?",
          "options": [
            "Evaporation",
            "Precipitation",
            "Condensation",
            "Transpiration"
          ],
          "answer": "Condensation"
        },
        "xp": 10
      },
      {
        "title": "Photosynthesis",
        "explanation": "Photosynthesis is the remarkable biological process by which green plants, algae, and some bacteria manufacture their own food using three raw ingredients: sunlight, water, and carbon dioxide. This process is the primary entry point for energy into almost all of Earth's ecosystems. Photosynthesis takes place inside specialized organelles called chloroplasts, which are found mostly in the cells of leaves. Inside the chloroplasts is a green pigment called chlorophyll, which is responsible for absorbing light energy from the sun — particularly the red and blue wavelengths of visible light. This absorbed light energy is used to power a complex series of chemical reactions that split water molecules and combine hydrogen with carbon dioxide to produce glucose, a simple sugar that serves as the plant's primary food and energy source. Oxygen is produced as a byproduct of splitting water molecules and is released through tiny pores in the leaf surface called stomata. The oxygen released by plants through photosynthesis is the very oxygen that humans, animals, and other organisms depend on for breathing and cellular respiration. Photosynthesis is therefore not only the foundation of all food chains on Earth but also the source of the oxygen that makes our atmosphere breathable.",
        "keyPoints": [
          "Chlorophyll, the green pigment inside chloroplasts, absorbs sunlight — especially red and blue wavelengths — to power the photosynthesis reaction.",
          "The overall equation for photosynthesis is: Carbon dioxide + Water + Sunlight energy → Glucose + Oxygen.",
          "Plants release oxygen as a byproduct of photosynthesis, which is essential for the respiration of animals and humans on Earth."
        ],
        "example": "On a bright sunny day, a large tree is constantly performing photosynthesis in thousands of leaf cells simultaneously. Its roots draw water up through the trunk. Its leaves absorb carbon dioxide from the air through microscopic stomata. Chloroplasts capture sunlight and combine these ingredients to produce glucose that fuels the tree's growth and reproduction. Meanwhile, every breath of oxygen you take outdoors is partly a product of that tree's photosynthetic activity.",
        "quiz": {
          "question": "Where does photosynthesis take place inside a plant cell?",
          "options": [
            "Nucleus",
            "Mitochondria",
            "Chloroplast",
            "Cell wall"
          ],
          "answer": "Chloroplast"
        },
        "xp": 10
      },
      {
        "title": "The Water Cycle",
        "explanation": "The water cycle, scientifically known as the hydrological cycle, is a continuous and dynamic natural process describing how water moves endlessly through the Earth's atmosphere, surface, and underground systems. This cycle is powered by two fundamental forces: solar energy from the Sun, which drives evaporation, and gravity, which pulls precipitation and surface water downhill. Water exists in three physical states — liquid, solid ice, and gaseous vapor — and the cycle involves constant transformations between these states. The main stages are evaporation (water becoming vapor), transpiration (plants releasing vapor), condensation (vapor forming clouds), precipitation (water falling as rain or snow), infiltration (water soaking into soil), and runoff (water flowing across land into rivers and oceans). This continuous movement is critical to life on Earth because it purifies water naturally, distributes fresh water around the planet, regulates climate and temperature, shapes landscapes through erosion, and sustains every ecosystem from tropical rainforests to Arctic tundras.",
        "keyPoints": [
          "The water cycle is a continuous natural system powered by the Sun's energy and Earth's gravity, with no true beginning or end.",
          "Evaporation converts liquid water to vapor; condensation turns that vapor back into liquid water droplets that form clouds.",
          "Precipitation returns water to the Earth's surface as rain, snow, sleet, or hail, replenishing rivers, lakes, and groundwater."
        ],
        "example": "Puddles disappearing on a warm, sunny afternoon is a real-world example of evaporation in action. The liquid water absorbs heat energy and transforms into invisible water vapor that joins the atmosphere. As this vapor rises to higher, cooler altitudes, it condenses around dust particles to form clouds. When those clouds become saturated, the water returns to Earth as rainfall, potentially in a completely different region many kilometres away.",
        "quiz": {
          "question": "What is the process called when water vapor cools down and turns back into liquid water to form clouds?",
          "options": [
            "Evaporation",
            "Condensation",
            "Precipitation",
            "Collection"
          ],
          "answer": "Condensation"
        },
        "xp": 10
      },
      {
        "title": "States of Matter",
        "explanation": "Everything in the observable universe that occupies physical space and possesses mass is classified as matter. On Earth under normal conditions, matter primarily exists in three familiar states: solid, liquid, and gas. The state of any substance depends entirely on the arrangement of its particles (atoms and molecules) and the amount of thermal energy those particles possess. In a solid, particles are densely packed together in a rigid, ordered structure and can only vibrate in place — this is why solids maintain a fixed shape and volume. In a liquid, particles are still close together but can freely slide and flow past one another — this allows liquids to take the shape of whatever container they are poured into while maintaining a constant volume. In a gas, particles are spread far apart and move rapidly and freely in all directions — gases expand to fill any available space and have no fixed shape or volume. Changes in temperature or pressure can cause matter to transition between these states: melting converts solid to liquid, evaporation converts liquid to gas, condensation converts gas to liquid, and freezing converts liquid to solid. Scientists also recognize a fourth state called plasma, found in stars and lightning, consisting of high-energy ionized gas particles.",
        "keyPoints": [
          "Matter exists in three primary states on Earth: solid (fixed shape and volume), liquid (fixed volume but no fixed shape), and gas (no fixed shape or volume).",
          "Solids have tightly packed particles that vibrate in place; liquid particles flow; gas particles move freely and spread out to fill their container.",
          "Changes in temperature cause state transitions: adding heat melts solids and evaporates liquids; removing heat freezes liquids and condenses gases."
        ],
        "example": "Water is the perfect everyday example of all three states. Ice is solid water — the molecules are locked in a rigid hexagonal crystal structure. When heated above 0°C, it melts into liquid water, where molecules can flow freely. When heated above 100°C, liquid water boils and becomes water vapor (steam), a gas where molecules move rapidly and spread throughout a space. Cooling the steam condenses it back to liquid, and freezing the liquid forms ice again.",
        "quiz": {
          "question": "Which state of matter has a fixed volume but takes the shape of whatever container it is poured into?",
          "options": [
            "Solid",
            "Liquid",
            "Gas",
            "Plasma"
          ],
          "answer": "Liquid"
        },
        "xp": 10
      },
      {
        "title": "Introduction to Photosynthesis",
        "explanation": "Photosynthesis is the remarkable life-sustaining process that green plants use to manufacture their own food directly from simple, readily available raw materials. Unlike animals, which must hunt, forage, or consume other organisms to obtain energy, plants are self-sufficient producers that generate their own nutrition. The three essential ingredients for photosynthesis are sunlight (a source of energy), water (absorbed through the plant's root system and transported upward through the stem), and carbon dioxide (a gas absorbed from the surrounding air through microscopic pores in the leaf surface called stomata). Inside plant leaves, millions of specialized microscopic organelles called chloroplasts capture the sunlight. The green color of most plant leaves comes from a light-absorbing pigment inside the chloroplasts called chlorophyll. The plant uses the captured light energy to trigger a series of chemical reactions that combine carbon dioxide and water molecules to create glucose — a type of simple sugar that serves as the plant's primary fuel for growth, reproduction, and all metabolic functions. The other product of this reaction is oxygen gas, which is released back into the atmosphere as a byproduct. This constant release of oxygen by Earth's plants and algae is what maintains the breathable composition of our atmosphere.",
        "keyPoints": [
          "Plants use photosynthesis to manufacture their own food by combining sunlight energy, water from the soil, and carbon dioxide from the air.",
          "Photosynthesis takes place inside microscopic chloroplasts found within the green cells of plant leaves and other green parts.",
          "The process produces glucose, which provides energy for the plant's growth and life processes, and releases oxygen gas as a beneficial byproduct."
        ],
        "example": "A large backyard tree absorbs water through thousands of hair-like root tips underground, drawing it up through the trunk via the vascular system. Simultaneously, the leaves open their stomata to absorb carbon dioxide from the air. On a sunny day, chloroplasts throughout the leaves capture solar energy and combine these ingredients in a complex biochemical reaction, producing glucose that feeds the tree and oxygen that benefits every living creature nearby.",
        "quiz": {
          "question": "What gas do plants absorb from the air to perform photosynthesis?",
          "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
          ],
          "answer": "Carbon dioxide"
        },
        "xp": 10
      },
      {
        "title": "Gravity and Forces",
        "explanation": "A force is a physical interaction — either a push or a pull — that acts upon an object and can change its speed, direction, or shape. Forces are the driving agents behind all motion and physical change in the universe. There are many types of forces in nature, including contact forces like friction (which resists sliding motion between surfaces), tension (the pull in a stretched rope or string), and normal force (the surface pushing back when you stand on it). There are also non-contact forces that act at a distance, and the most famous of these is gravity. Gravity is a universal attractive force that acts between all objects that have mass. The greater an object's mass, the stronger its gravitational pull on other objects. Earth has an enormous mass, giving it a powerful gravitational field that pulls everything near it downward toward its center. This is why objects fall when dropped, why the atmosphere stays wrapped around the planet, why oceans stay in their basins, and why the Moon orbits around Earth rather than floating away into space. Gravity also keeps Earth and all the other planets in their stable orbits around the Sun. Without gravity, the universe as we know it — including all the stars, galaxies, and planetary systems — could not exist.",
        "keyPoints": [
          "A force is any physical push or pull interaction that can change an object's speed, direction, or physical shape.",
          "Gravity is a universal attractive force that acts between all objects with mass, drawing them toward one another.",
          "Earth's substantial mass creates a strong gravitational field that pulls nearby objects downward and keeps the atmosphere and oceans in place."
        ],
        "example": "When you pick up a book and then let go, gravity immediately pulls it downward toward Earth's center, and it falls to the floor. The weight you feel in your hand while holding the book is your muscles providing an upward force that exactly counteracts gravity's downward pull. The moment you release it, gravity wins and the book accelerates downward at approximately 9.8 metres per second squared — the standard acceleration due to Earth's gravity.",
        "quiz": {
          "question": "What is the name of the invisible force that pulls objects down toward the center of the Earth?",
          "options": [
            "Magnetism",
            "Friction",
            "Gravity",
            "Electricity"
          ],
          "answer": "Gravity"
        },
        "xp": 10
      },
      {
        "title": "The Solar System",
        "explanation": "Our solar system is a vast and complex astronomical system located within the Orion Arm of the Milky Way galaxy, approximately 26,000 light-years from the galactic center. At the heart of our solar system sits the Sun, a massive, scorching ball of plasma held together by its own gravity and powered by nuclear fusion reactions in its core that convert hydrogen into helium, releasing enormous amounts of energy as light and heat. Eight major planets orbit the Sun at different distances, held in their stable elliptical paths by the Sun's powerful gravitational field. The four inner planets — Mercury, Venus, Earth, and Mars — are relatively small, dense, rocky worlds. The four outer planets — Jupiter, Saturn, Uranus, and Neptune — are far larger and are known as the gas and ice giants. Beyond the planets lie the asteroid belt (a region of rocky debris between Mars and Jupiter), the Kuiper Belt (a region of icy objects beyond Neptune), and the theoretical Oort Cloud (a distant shell of comets surrounding the entire system). Our solar system also contains five officially recognized dwarf planets, including Pluto, as well as countless moons orbiting the larger planets, and billions of comets and asteroids.",
        "keyPoints": [
          "The solar system consists of the Sun at its center and eight major orbiting planets, along with dwarf planets, moons, asteroids, and comets.",
          "All planets are kept in their stable elliptical orbits by the Sun's immense gravitational pull, which decreases with distance from the Sun.",
          "The eight planets are divided into inner rocky terrestrial planets (Mercury, Venus, Earth, Mars) and outer gas and ice giants (Jupiter, Saturn, Uranus, Neptune)."
        ],
        "example": "Earth is the third planet from the Sun and completes one full orbit every 365.25 days — this is why we have a year. It orbits at an average distance of about 150 million kilometres, which places it in the 'habitable zone' where temperatures allow liquid water to exist. Jupiter, the fifth planet and the largest in our solar system, is over 1,300 times larger than Earth by volume and takes almost 12 Earth years to complete a single orbit of the Sun.",
        "quiz": {
          "question": "Which celestial body sits directly at the center of our solar system?",
          "options": [
            "The Earth",
            "The Moon",
            "The Sun",
            "Jupiter"
          ],
          "answer": "The Sun"
        },
        "xp": 10
      }
    ]
  },
  {
    "id": "english",
    "name": "English",
    "color": "#da5c48",
    "topics": [
      {
        "title": "Parts of Speech",
        "explanation": "Parts of speech are the fundamental categories used in grammar to classify every word in the English language based on the specific role it performs within a sentence. There are eight main parts of speech, and understanding each one deeply is essential for constructing grammatically correct, clear, and varied sentences. Nouns are naming words that refer to people, places, objects, or abstract ideas. Pronouns are words that replace nouns to avoid repetition (he, she, it, they). Verbs express actions or states of being and are the backbone of every sentence. Adjectives are descriptive words that modify nouns by providing details about qualities, size, color, or quantity. Adverbs modify verbs, adjectives, or other adverbs, telling us how, when, where, or to what extent. Prepositions show relationships between words in terms of position, time, or direction (in, on, under, before). Conjunctions connect words, phrases, or clauses (and, but, because, although). Interjections are exclamatory words or phrases that express sudden emotion (Oh! Wow! Ouch!). Mastering parts of speech enables you to analyse language critically, write with precision and variety, and understand grammar rules that underpin all of English communication.",
        "keyPoints": [
          "Nouns name people, places, physical objects, or abstract ideas and can function as the subject or object of a sentence.",
          "Verbs express physical or mental actions, states of being, or occurrences and are an essential, required element of every complete sentence.",
          "Adjectives describe and modify nouns (providing details about them), while adverbs describe and modify verbs, adjectives, or other adverbs."
        ],
        "example": "In the sentence 'The quick brown fox jumps gracefully over the lazy dog,' the words 'fox' and 'dog' are nouns naming animals. 'Jumps' is a verb expressing the action. 'Quick,' 'brown,' and 'lazy' are adjectives describing the nouns. 'Gracefully' is an adverb describing how the fox jumps. 'Over' is a preposition showing spatial relationship. 'The' is a definite article — a special type of adjective. Identifying each word's part of speech reveals the grammatical architecture of the sentence.",
        "quiz": {
          "question": "Which part of speech does the word 'quickly' belong to?",
          "options": [
            "Noun",
            "Verb",
            "Adjective",
            "Adverb"
          ],
          "answer": "Adverb"
        },
        "xp": 10
      },
      {
        "title": "Reading Comprehension",
        "explanation": "Reading comprehension is the complex cognitive skill of not just decoding the words on a page, but truly understanding, analyzing, and interpreting the meaning, ideas, and intentions behind a written text. High-level reading comprehension involves several interconnected abilities working together. First, identifying the main idea — the central message or argument the author is most fundamentally trying to communicate. Second, recognizing supporting details — the specific facts, examples, statistics, or anecdotes the author uses to develop and substantiate the main idea. Third, understanding the author's purpose — whether they are trying to inform, persuade, entertain, or explain. Fourth, making inferences — drawing intelligent conclusions about things that are implied or suggested by the text but not explicitly stated. Fifth, understanding vocabulary in context — figuring out the meaning of unfamiliar words by using the surrounding sentences as clues. Strong reading comprehension is not just an English skill; it is the foundation of academic success across every subject. A student who cannot comprehend a maths word problem, a science article, or a history passage will struggle regardless of their subject knowledge.",
        "keyPoints": [
          "The main idea is the most important central point or message that the author is communicating throughout the entire text or passage.",
          "Supporting details are the specific facts, examples, evidence, or explanations the author provides to develop and reinforce the main idea.",
          "Making an inference means using clues and evidence within the text to draw a logical conclusion about something the author implies but does not state directly."
        ],
        "example": "Consider this short passage: 'Maya checked the dark sky anxiously, pulled her raincoat from the cupboard, and grabbed her bright yellow umbrella before stepping outside.' The word 'rain' never appears, but a skilled reader infers from the context clues — dark sky, raincoat, umbrella — that it was raining or about to rain. This inference-making skill is what separates surface-level reading from true comprehension.",
        "quiz": {
          "question": "What does making an inference mean?",
          "options": [
            "Copying text directly",
            "Guessing randomly",
            "Drawing a conclusion from clues in the text",
            "Summarizing every word"
          ],
          "answer": "Drawing a conclusion from clues in the text"
        },
        "xp": 10
      },
      {
        "title": "Essay Writing Structure",
        "explanation": "A well-structured essay is organized into three clearly defined sections: the introduction, the body paragraphs, and the conclusion. Each section serves a distinct and essential purpose in building a coherent, persuasive, and well-argued piece of writing. The introduction is the first paragraph, which serves to capture the reader's attention with a hook (an interesting question, a surprising statistic, or a compelling anecdote), provide necessary background context on the topic, and most importantly, end with a clear thesis statement — a single sentence that concisely expresses the essay's main argument or central claim. The body of the essay consists of multiple paragraphs (typically three for a standard essay), each focusing on a single supporting point that develops the thesis. Every body paragraph should begin with a topic sentence that states the paragraph's main idea, followed by evidence (quotes, facts, or examples), followed by your own analysis explaining how that evidence supports your thesis. The conclusion is the final paragraph, which should not introduce any new information or arguments. Instead, it should restate the thesis in different words, briefly summarize the key points made in the body paragraphs, and provide a satisfying sense of closure, perhaps ending with a broader reflection or call to action.",
        "keyPoints": [
          "The thesis statement is typically the last sentence of the introduction and clearly states the essay's main argument or central position on the topic.",
          "Each body paragraph should begin with a topic sentence, followed by evidence and specific examples, followed by your analysis connecting the evidence to your thesis.",
          "The conclusion restates the thesis in new words, summarizes the key arguments, and provides closure without introducing any brand new information."
        ],
        "example": "For an essay titled 'The Benefits of Regular Exercise': Introduction hook — 'Studies show that just 30 minutes of daily exercise can reduce the risk of heart disease by 35%.' Thesis — 'Regular exercise improves not only physical health but also mental wellbeing and social connection.' Body paragraph 1 — physical benefits (cardiovascular health, weight management). Body paragraph 2 — mental health benefits (reducing anxiety and depression). Body paragraph 3 — social benefits (team sports and group fitness). Conclusion — restate thesis, summarize key points, end with an encouraging final statement.",
        "quiz": {
          "question": "What is the purpose of a thesis statement?",
          "options": [
            "To tell a story",
            "To state the main argument of the essay",
            "To list all evidence",
            "To write the conclusion"
          ],
          "answer": "To state the main argument of the essay"
        },
        "xp": 10
      },
      {
        "title": "Vocabulary and Word Roots",
        "explanation": "Having a rich, varied, and precise vocabulary is one of the most powerful skills you can develop in English. It enhances your reading comprehension, improves the quality and sophistication of your writing, strengthens your verbal communication, and helps you perform better on standardized tests. One of the most efficient and strategic methods for rapidly expanding your vocabulary is learning word roots — the fundamental base parts of words that carry the core lexical meaning. The majority of complex English words are not entirely new inventions; they are built from ancient Latin and Greek root words that have been combined with various prefixes (word parts added to the beginning) and suffixes (word parts added to the end). When you learn a single root, you unlock the meaning of potentially dozens of related words simultaneously. For example, learning that the Latin root 'aud' means 'to hear' immediately helps you understand audience (those who hear), audible (able to be heard), auditorium (a place for hearing), audit (to listen to accounts), and audition (a hearing/tryout) — all from one root. Similarly, the Greek root 'graph' means 'to write', giving us biography (writing about a life), photography (writing with light), autograph (self-writing), and paragraph (writing beside).",
        "keyPoints": [
          "Root words are the core lexical base of a word that carries its fundamental meaning, often derived from Latin or ancient Greek origins.",
          "Prefixes are word parts added to the beginning of a root word that modify or expand its meaning (un-, pre-, mis-, re-, anti-, sub-).",
          "Suffixes are word parts added to the end of a root word that often change its grammatical category (-tion, -ness, -ful, -less, -ing, -ment)."
        ],
        "example": "The Latin root 'port' means 'to carry'. Once you know this, a whole family of words opens up: import (to carry goods in from abroad), export (to carry goods out to other countries), transport (to carry across distances), portable (able to be carried), support (to carry weight from below), report (to carry information back), and portfolio (a case for carrying papers). Learning one root gives you seven words for the price of one.",
        "quiz": {
          "question": "What does the prefix 'un-' mean in the word 'unhappy'?",
          "options": [
            "Very",
            "More than",
            "Not",
            "Before"
          ],
          "answer": "Not"
        },
        "xp": 10
      },
      {
        "title": "Punctuation and Sentence Structure",
        "explanation": "Punctuation marks are standardized symbols embedded within written text that serve to organize sentences, indicate pauses, signal the end of thoughts, and clarify relationships between ideas — essentially providing the rhythm, tone, and structure that spoken language conveys through voice and intonation. Without punctuation, written English would be ambiguous and confusing to interpret. The full stop (or period) marks the definitive end of a declarative or imperative sentence. The comma indicates a brief pause within a sentence and is used to separate items in a list, join two independent clauses with a coordinating conjunction, set off introductory phrases, and enclose non-essential information. The question mark ends any sentence that poses a direct question. The exclamation mark follows statements expressing strong emotion, surprise, or urgency. The apostrophe serves two distinct functions: indicating possession (the dog's bowl) and marking contractions where letters have been omitted (don't = do not). Sentence structure refers to the grammatical arrangement of words, phrases, and clauses within a sentence. A complete sentence must contain at minimum a subject (who or what the sentence is about) and a predicate (the verb and any related information). Common structural errors include run-on sentences (two complete sentences incorrectly joined without proper punctuation) and sentence fragments (incomplete phrases lacking a subject or main verb).",
        "keyPoints": [
          "A full stop ends a declarative or imperative statement; a question mark ends a direct question; an exclamation mark ends an expression of strong emotion.",
          "Commas separate items in lists, connect clauses joined by coordinating conjunctions, and set off introductory phrases and non-essential information.",
          "An apostrophe performs two functions: indicating possession (Sara's book) and showing where letters have been omitted in a contraction (it's = it is)."
        ],
        "example": "Compare these two sentences: 'Let's eat Grandpa!' and 'Let's eat, Grandpa!' The single comma makes an enormous difference — the first sentence absurdly suggests eating the grandfather, while the second correctly invites him to join a meal. This classic example perfectly illustrates how a single punctuation mark can completely alter meaning and avoid ridiculous or even offensive misunderstandings.",
        "quiz": {
          "question": "Which punctuation mark is used to show possession?",
          "options": [
            "Comma",
            "Full stop",
            "Apostrophe",
            "Semicolon"
          ],
          "answer": "Apostrophe"
        },
        "xp": 10
      },
      {
        "title": "Nouns and Verbs",
        "explanation": "To write clearly and grammatically correct sentences in English, you must first develop a thorough understanding of the parts of speech — the categories that classify words according to the specific job they perform in a sentence. Among all eight parts of speech, nouns and verbs are the two most fundamental and essential. A noun is a naming word. It represents a person (teacher, doctor, Sai), a physical place (classroom, city, mountain), a concrete object (chair, laptop, book), or an abstract idea or concept (freedom, happiness, justice). Nouns serve as the subjects and objects of sentences — the things that perform actions and the things that receive them. A verb, by contrast, is an action or state word. Verbs describe what the subject of a sentence does (run, think, calculate, speak), what the subject experiences (feel, seem, appear), or what state of being the subject exists in (is, are, was, were). Every grammatically complete sentence in English must contain at least one subject noun (or pronoun) and one main verb — without these two elements, a group of words is considered a fragment, not a sentence. Together, nouns and verbs form the skeleton on which all other sentence elements are built.",
        "keyPoints": [
          "Nouns are naming words representing people, physical places, concrete objects, or abstract ideas and concepts.",
          "Verbs express physical actions, mental actions, processes, or states of being experienced by the sentence's subject.",
          "Every grammatically complete sentence absolutely requires both a subject (usually a noun or pronoun) and a predicate (containing at least one main verb)."
        ],
        "example": "In the sentence 'The dog barks loudly at strangers every morning,' 'dog' is the subject noun performing the action. 'Barks' is the action verb describing what the dog does. 'Strangers' is an object noun receiving the action. Removing either the noun subject or the verb leaves an incomplete and confusing fragment: 'Barks loudly at strangers' (missing subject) or 'The dog loudly at strangers' (missing verb) — neither makes grammatical sense.",
        "quiz": {
          "question": "Identify the action verb in this sentence: 'The creative chef cooks a delicious meal.'",
          "options": [
            "Chef",
            "Cooks",
            "Delicious",
            "Meal"
          ],
          "answer": "Cooks"
        },
        "xp": 10
      },
      {
        "title": "Adjectives and Adverbs",
        "explanation": "Adjectives and adverbs are both descriptive words — known collectively as modifiers — that add precision, color, and vivid detail to your writing, transforming flat, basic sentences into rich and engaging descriptions. Without modifiers, language becomes vague and monotonous: 'The car moved' tells us very little, while 'The ancient, battered car moved agonizingly slowly' paints a much more complete picture. An adjective is a word that directly modifies a noun or pronoun, providing specific information about its qualities or characteristics. Adjectives can describe physical attributes (tall, blue, circular, enormous), emotional qualities (angry, joyful, nervous), quantities (five, several, many), or degrees (best, worst, more, less). Adjectives usually appear immediately before the noun they describe, or after a linking verb (The sky is clear — 'clear' describes the sky). An adverb is a word that modifies a verb, an adjective, or another adverb. When modifying a verb, adverbs tell us how an action is performed (quickly, carefully, loudly), when it happens (yesterday, soon, always), where it occurs (nearby, outside, above), or to what extent (very, quite, almost). Most adverbs that describe manner are formed by adding the suffix '-ly' to an adjective (slow → slowly, careful → carefully, happy → happily), though numerous common adverbs do not follow this pattern (fast, hard, well, far).",
        "keyPoints": [
          "Adjectives modify nouns and pronouns by providing descriptive information about their qualities, characteristics, quantities, or comparative degrees.",
          "Adverbs modify verbs, adjectives, and other adverbs, answering the questions how, when, where, or to what extent regarding an action or quality.",
          "Many adverbs that describe the manner of an action are formed by adding '-ly' to the base adjective, though many common adverbs are exceptions to this rule."
        ],
        "example": "In the descriptive phrase 'the incredibly quiet cat walked remarkably softly across the creaky floorboards,' 'quiet' is an adjective modifying the noun 'cat.' 'Softly' is an adverb modifying the verb 'walked,' telling us how the cat walked. 'Incredibly' is an adverb modifying the adjective 'quiet,' telling us to what degree it was quiet. 'Remarkably' is an adverb modifying 'softly.' Notice how stacking well-chosen adjectives and adverbs creates vivid imagery.",
        "quiz": {
          "question": "In the sentence 'She ran quickly to the bus', which word is the adverb?",
          "options": [
            "She",
            "Ran",
            "Quickly",
            "Bus"
          ],
          "answer": "Quickly"
        },
        "xp": 10
      },
      {
        "title": "Basic Punctuation",
        "explanation": "Punctuation marks are a system of standardized symbols that we insert into written text to add the structure, clarity, and nuance that spoken language conveys naturally through pauses, rising intonation, volume, and emphasis. Without punctuation, a piece of writing would be an endless stream of words that is exhausting and confusing to interpret. Punctuation acts like a set of signposts and traffic signals, guiding the reader through the text and making the writer's intended meaning unmistakably clear. A period (or full stop) is placed at the end of every declarative sentence — a statement — and every imperative sentence — a command. It signals to the reader that this particular thought is complete and finished. A question mark replaces the period at the end of any sentence that asks a direct question, immediately alerting the reader that an interrogative sentence has been used. An exclamation point is placed at the end of a sentence to convey strong emotion such as excitement, surprise, anger, or urgency, and it signals that the sentence should be read with emphasis. Commas are the most versatile and frequently used punctuation marks. They create brief, helpful pauses within sentences to separate items in a list, join two independent clauses with coordinating conjunctions, set off introductory words or phrases, and enclose additional non-essential information.",
        "keyPoints": [
          "Punctuation marks guide readers through text, indicating pauses, stops, questions, and emotional emphasis to clarify the intended meaning.",
          "Periods end declarative and imperative statements; question marks end direct questions; exclamation points signal strong emotion or urgency.",
          "Commas create brief pauses within sentences, separate listed items, join clauses, and set off introductory or non-essential information."
        ],
        "example": "The sentence 'Let's eat Grandpa!' and the sentence 'Let's eat, Grandpa!' are identical except for one comma, yet they have completely different meanings. The first version accidentally implies eating the grandfather, while the comma in the second version clarifies that the speaker is addressing Grandpa and inviting him to eat. This famous example shows how a single punctuation mark can completely change the meaning — and in real life, prevent significant confusion or offence.",
        "quiz": {
          "question": "Which punctuation mark should be placed at the end of the sentence: 'Where are you going'",
          "options": [
            "Period (.)",
            "Comma (,)",
            "Question mark (\")",
            "Exclamation point (!)"
          ],
          "answer": "Question mark (\")"
        },
        "xp": 10
      },
      {
        "title": "Subject-Verb Agreement",
        "explanation": "Subject-verb agreement is a fundamental grammatical rule in English stating that the subject of a sentence and its main verb must correspond and match each other in grammatical number — meaning both must be singular, or both must be plural. This agreement ensures that sentences are grammatically well-formed, sound natural to a fluent English speaker, and communicate their intended meaning without confusion. When a subject is singular (referring to one person, place, thing, or idea), the verb must take its singular form, which in the present tense typically ends in an 's' for third-person singular verbs. When a subject is plural (referring to more than one), the verb must take its plural form. Subject-verb agreement can become tricky in several common situations: when a collective noun (a word referring to a group, like 'team,' 'flock,' or 'committee') is the subject; when a phrase or clause comes between the subject and verb; when indefinite pronouns (everyone, nobody, each) are the subject; or when compound subjects joined by 'and,' 'or,' or 'nor' are used. Mastering agreement rules prevents grammatical errors that can undermine your credibility in academic writing and professional communication.",
        "keyPoints": [
          "The subject and the main verb of every sentence must match in grammatical number — both singular or both plural.",
          "Singular subjects require singular verb forms (he runs, she thinks, it works) in the present tense.",
          "Plural subjects require plural verb forms (they run, people think, dogs work), and collective nouns can be singular or plural depending on context."
        ],
        "example": "We say 'The student studies diligently' using the singular verb form 'studies' because 'student' is singular. When the subject becomes plural, we say 'The students study diligently' — the verb loses the 's' to become 'study'. A common mistake is: 'The group of students are working hard' — because 'group' is a singular collective noun, the correct form is 'The group of students is working hard.'",
        "quiz": {
          "question": "Which verb correctly completes the sentence: 'The flock of birds ___ south for the winter.'",
          "options": [
            "flies",
            "fly",
            "flying",
            "is fly"
          ],
          "answer": "flies"
        },
        "xp": 10
      },
      {
        "title": "Synonyms and Antonyms",
        "explanation": "Synonyms and antonyms are two essential categories of word relationships that significantly enrich your vocabulary and dramatically improve the quality, variety, and precision of your written and spoken English. Synonyms are words that have the same or very similar meanings to another word. For example, 'happy,' 'joyful,' 'elated,' 'content,' 'cheerful,' and 'pleased' are all synonyms of each other because they all express positive emotional states, although each carries slightly different nuances and degrees of intensity. Using synonyms skillfully prevents the repetitive and monotonous overuse of the same word, keeps your writing fresh and engaging, and allows you to choose precisely the right word for the specific tone and context you want to achieve. Antonyms are words that express meanings directly opposite to another word. 'Happy' and 'sad', 'hot' and 'cold', 'ancient' and 'modern', 'generous' and 'stingy' are all antonym pairs. Understanding antonyms is vital for expressing contrasts, constructing comparisons, and creating dramatic effect in writing. Together, knowledge of synonyms and antonyms dramatically expands your active vocabulary — the words you can actively use in your own writing and speech — which is one of the most reliable indicators of language proficiency.",
        "keyPoints": [
          "Synonyms are different words that share the same or very similar meanings, though they may carry subtly different connotations or levels of intensity.",
          "Antonyms are pairs of words that carry directly opposite meanings, and using them helps express contrast and comparison clearly.",
          "A rich knowledge of both synonyms and antonyms helps avoid dull repetition, adds variety to writing, and enables precise word choice."
        ],
        "example": "'Happy' and 'joyful' are synonyms — they mean essentially the same thing. However, 'ecstatic' is a synonym that suggests an even stronger, more intense form of happiness. Meanwhile, 'sad,' 'miserable,' and 'despondent' are antonyms of 'happy,' each expressing different levels of unhappiness. A skilled writer chooses between 'happy,' 'cheerful,' 'content,' and 'ecstatic' based on the exact emotional intensity they wish to convey — that precision is the mark of a strong vocabulary.",
        "quiz": {
          "question": "What is an antonym for the word 'huge'?",
          "options": [
            "Large",
            "Tiny",
            "Gigantic",
            "Heavy"
          ],
          "answer": "Tiny"
        },
        "xp": 10
      }
    ]
  },
  {
    "id": "dsa",
    "name": "DSA",
    "color": "#8a5cf6",
    "topics": [
      {
        "title": "Arrays and Their Operations",
        "explanation": "An array is one of the most fundamental, widely used, and important data structures in all of computer science and programming. It stores a fixed-size, ordered collection of elements of the same data type in a sequence of contiguous (adjacent) memory locations. Because all elements are stored next to each other in memory, each element can be accessed directly and instantly using its index number (its position in the array), without needing to traverse the structure. Array indexing begins at 0, so the first element is at index 0, the second at index 1, and so on. The key strength of arrays is their O(1) constant-time random access — retrieving any element by its index takes the same amount of time regardless of the array's size. However, arrays also have significant limitations. Their size is fixed at the time of declaration and cannot be changed dynamically. Inserting or deleting an element from the middle of an array requires shifting all subsequent elements, making those operations O(n) time-expensive. Despite these limitations, arrays form the building blocks of countless other data structures including stacks, queues, hash tables, heaps, and matrices, and are used in virtually every algorithm you will ever write.",
        "keyPoints": [
          "Array elements are stored in contiguous memory locations and accessed directly using index numbers that start at 0 for the first element.",
          "Arrays have a fixed size that is determined at the time of declaration — once set, the array's size cannot be changed dynamically.",
          "Accessing any element by its index is O(1) constant time (extremely fast), but inserting or deleting elements in the middle is O(n) because all subsequent elements must be shifted."
        ],
        "example": "Consider an integer array: int[] scores = {90, 75, 88, 60, 95}. The element at index 0 is 90, at index 2 is 88, and at index 4 is 95. If you need to insert the score 82 between positions 1 and 2, you would need to shift 88, 60, and 95 one position to the right to make space — this shift operation demonstrates why insertion is O(n). Accessing scores[3] directly returns 60 in constant time regardless of array size.",
        "quiz": {
          "question": "What is the index of the first element in an array?",
          "options": [
            "1",
            "0",
            "-1",
            "Depends on language"
          ],
          "answer": "0"
        },
        "xp": 10
      },
      {
        "title": "Linked Lists",
        "explanation": "A linked list is a dynamic linear data structure in which elements, called nodes, are stored at non-contiguous (scattered) memory locations and connected to each other through pointers or references. Each node in a singly linked list contains exactly two components: the data value it stores, and a pointer (or reference) that holds the memory address of the next node in the sequence. The first node in the list is called the head, and the last node's pointer is set to null, indicating the end of the list. Because nodes can be placed anywhere in memory and linked via pointers, linked lists can grow and shrink dynamically during program execution without needing to pre-allocate a fixed block of memory. This makes insertions and deletions at the beginning or in the middle of the list significantly more efficient than with arrays — they can be done in O(1) time if you have a pointer to the relevant node, since you only need to update a few pointers rather than shifting many elements. The main trade-off is that linked lists do not support direct random access to elements — to reach the nth element, you must traverse the list from the head, following pointers one by one, which is O(n). There are several variations: singly linked lists (each node points only forward), doubly linked lists (each node points both forward and backward), and circular linked lists (the tail points back to the head).",
        "keyPoints": [
          "Each node in a singly linked list contains two components: the actual data value stored in that node, and a pointer reference to the next node in the sequence.",
          "Linked lists can grow or shrink dynamically at runtime since nodes are allocated individually in memory wherever space is available.",
          "Traversal must start from the head node and follow pointers sequentially, meaning accessing the nth element takes O(n) time rather than the O(1) of arrays."
        ],
        "example": "Think of a treasure hunt where each clue contains both a piece of information and the location of the next clue. You must start at the first clue (head) and follow each clue in sequence to find any specific one — you cannot jump directly to clue 5. This perfectly mirrors how linked list traversal works. To insert a new clue between clue 3 and clue 4, you simply update clue 3's pointer to point to the new clue, and set the new clue's pointer to the old clue 4 — a very efficient O(1) insertion requiring no movement of other clues.",
        "quiz": {
          "question": "What does each node in a singly linked list contain?",
          "options": [
            "Only data",
            "Only a pointer",
            "Data and a pointer to the next node",
            "Two pointers"
          ],
          "answer": "Data and a pointer to the next node"
        },
        "xp": 10
      },
      {
        "title": "Stacks and Queues",
        "explanation": "Stacks and queues are two fundamental abstract data types (ADTs) that define specific, disciplined rules for how data can be inserted and removed. Their simplicity and predictability make them indispensable in computer science algorithms and system design. A stack is a data structure that strictly follows the Last-In-First-Out (LIFO) principle — the most recently added element is always the first one to be removed. Imagine a vertical stack of plates in a cafeteria: you can only place a new plate on top, and you can only remove the plate currently on top. The two primary operations are push (adding an element onto the top of the stack) and pop (removing the top element from the stack). Stacks are used in function call management (the call stack in programming languages), expression parsing, undo/redo operations in text editors, and browser history navigation. A queue follows the opposite First-In-First-Out (FIFO) principle — the element that has been waiting the longest is always the first to be removed. Think of customers standing in a queue at a checkout — the person who joined first is served first. The two primary operations are enqueue (adding an element to the back of the queue) and dequeue (removing the element from the front). Queues are used in task scheduling, print job management, CPU process scheduling, message queuing systems, and breadth-first graph traversal algorithms.",
        "keyPoints": [
          "A stack follows the Last-In, First-Out (LIFO) principle — the push operation adds to the top and the pop operation removes from the top.",
          "A queue follows the First-In, First-Out (FIFO) principle — the enqueue operation adds to the back and the dequeue operation removes from the front.",
          "Both stacks and queues can be implemented efficiently using either arrays (with index tracking) or linked lists (with head and tail pointers)."
        ],
        "example": "Stack real-world example: the 'Undo' function in a word processor. Every action you perform is pushed onto a stack. When you press Ctrl+Z, the most recent action is popped off and reversed. Queue real-world example: A printer queue. If you and two colleagues send print jobs simultaneously, they are processed in the order received — the first document sent prints first, then the second, then the third. No jumping the queue allowed.",
        "quiz": {
          "question": "Which data structure follows the FIFO principle?",
          "options": [
            "Stack",
            "Array",
            "Queue",
            "Tree"
          ],
          "answer": "Queue"
        },
        "xp": 10
      },
      {
        "title": "Binary Search",
        "explanation": "Binary search is a highly efficient searching algorithm designed specifically to find a target element within a sorted collection of items. The key prerequisite is that the data must already be sorted in ascending or descending order — binary search will not work correctly on unsorted data. The algorithm works by employing a classic divide-and-conquer strategy. It begins by examining the element at the exact middle of the current search range. If this middle element equals the target, the search is successful and complete. If the target value is smaller than the middle element, the algorithm eliminates the entire right half of the range from consideration and continues searching only in the left half. If the target is larger than the middle element, the left half is eliminated and the search continues only in the right half. This halving process continues repeatedly until either the target is found or the remaining search range becomes empty (indicating the target is not present in the collection). Each iteration eliminates approximately half of the remaining candidates, which is why binary search achieves an impressively efficient time complexity of O(log n). This means that for an array of 1,000,000 elements, binary search requires at most about 20 comparisons — far superior to linear search's worst case of 1,000,000 comparisons.",
        "keyPoints": [
          "Binary search can only be applied to sorted arrays or sorted lists — it will produce incorrect results on unsorted data.",
          "Each step of the algorithm eliminates approximately half of the remaining search space by comparing the target against the middle element.",
          "Binary search has a time complexity of O(log n), making it extremely efficient for large datasets — far superior to the O(n) linear search."
        ],
        "example": "Searching for the number 45 in the sorted array [10, 20, 30, 40, 50, 60, 70, 80]: Step 1 — middle element is 40 (index 3). Since 45 > 40, search the right half: [50, 60, 70, 80]. Step 2 — middle element is 60. Since 45 < 60, search the left half: [50]. Step 3 — middle element is 50. Since 45 < 50 and there are no more elements to check, 45 is not found. Only 3 comparisons needed for an 8-element array — compare this to linear search's potential 8 comparisons.",
        "quiz": {
          "question": "What is the time complexity of binary search?",
          "options": [
            "O(n)",
            "O(n)",
            "O(log n)",
            "O(1)"
          ],
          "answer": "O(log n)"
        },
        "xp": 10
      },
      {
        "title": "Trees and Binary Search Trees",
        "explanation": "A tree is a non-linear, hierarchical data structure composed of nodes connected by edges, used to represent relationships that have a natural parent-child or hierarchical structure. At the top of the tree sits a single node called the root, which has no parent. Every other node has exactly one parent node. Nodes at the bottom of the tree that have no children are called leaf nodes. The depth of a node is the number of edges from the root to that node, and the height of a tree is the maximum depth of any leaf. A Binary Tree is a tree where every node has at most two children, conventionally referred to as the left child and the right child. A Binary Search Tree (BST) is a specialized binary tree with an important ordering property: for any given node, all values in its left subtree are strictly less than the node's value, and all values in its right subtree are strictly greater than the node's value. This property holds for every single node throughout the entire tree. This ordering makes BSTs extremely efficient for three core operations: searching for a value, inserting a new value, and deleting an existing value — all achievable in O(log n) average case time for balanced trees. BSTs also support in-order traversal, which visits all nodes in ascending sorted order, making them useful for sorting and range queries.",
        "keyPoints": [
          "The root is the topmost node in a tree with no parent, while leaf nodes are at the bottom of the tree and have no children of their own.",
          "In a Binary Search Tree (BST), every node's left subtree contains only values smaller than that node's value, and the right subtree contains only larger values.",
          "In-order traversal (Left → Root → Right) of a BST always visits and outputs all nodes in ascending sorted order."
        ],
        "example": "Inserting values 5, 3, 7, 1, 4, 6, 8 into an empty BST: 5 becomes the root. 3 < 5, so it goes left of 5. 7 > 5, so it goes right of 5. 1 < 5 then 1 < 3, so it goes left of 3. 4 < 5 then 4 > 3, so it goes right of 3. 6 > 5 then 6 < 7, so it goes left of 7. 8 > 5 then 8 > 7, so it goes right of 7. In-order traversal visits: 1, 3, 4, 5, 6, 7, 8 — perfectly sorted ascending order.",
        "quiz": {
          "question": "In a Binary Search Tree, where is a value smaller than the root placed?",
          "options": [
            "Right subtree",
            "Root itself",
            "Left subtree",
            "At any position"
          ],
          "answer": "Left subtree"
        },
        "xp": 10
      },
      {
        "title": "What is an Array\"",
        "explanation": "An array is one of the most fundamental and foundational data structures in computer science and is typically the very first data structure taught to beginners in programming. At its core, an array is an organized collection of items stored in sequential, contiguous memory locations — meaning all the items sit side-by-side in memory like books lined up on a single shelf. Every item in an array must be of the same data type, such as all integers, all strings, or all floating-point numbers. Each storage slot in an array is assigned a unique identifying number called an index, which acts like a precise address for that specific position. The index tells the computer exactly where in memory to find a particular item without needing to search through the other items. A critically important convention to memorize is that array indexing in programming does not start at 1 as you might naturally expect — instead, it starts at 0. This means the very first item in the array is found at index 0, the second item is at index 1, the third at index 2, and so on. The last element in an array of size n is always at index n-1. When you declare an array, you specify both the type of data it will hold and its maximum size, and that size is fixed — you cannot add extra slots to an array after it has been created without creating an entirely new, larger array.",
        "keyPoints": [
          "An array stores an ordered collection of same-type items in sequential, contiguous memory slots for organized, efficient storage.",
          "Each item in an array is accessed using a unique numerical identifier called an index that pinpoints its exact position.",
          "Array indexing always starts at 0 in virtually all programming languages, meaning the first item is at index 0, not index 1."
        ],
        "example": "An array storing a student's test scores might look like this: scores = [85, 92, 78, 96, 71]. The score 85 is at index 0, 92 is at index 1, 78 is at index 2, 96 is at index 3, and 71 is at index 4. To retrieve the third score (78), you write scores[2] — using index 2 because indexing starts at 0. To find the highest score, you would compare all values; to find the average, you add them all and divide by 5.",
        "quiz": {
          "question": "If an array holds values ['apple', 'banana', 'cherry'], what is at index 1?",
          "options": [
            "apple",
            "banana",
            "cherry",
            "nothing"
          ],
          "answer": "banana"
        },
        "xp": 10
      },
      {
        "title": "Understanding Stacks",
        "explanation": "A stack is a linear data structure that stores items in a very specific, strictly disciplined order governed by the LIFO rule — Last-In, First-Out. This simple but powerful rule means that whatever item was most recently added to the stack will always be the very first item to be removed from it. The 'top' of the stack is the only accessible point — you can only interact with (add to or remove from) the topmost position. Think of it exactly like a physical stack of plates in a busy restaurant kitchen. A chef can only safely add a clean plate to the very top of the pile, and can only pick up the plate that is currently resting on the top. Reaching into the middle or bottom of the pile would cause all the plates to crash. Adding an item to a stack is called a push operation. Removing the top item is called a pop operation. Checking what item is currently at the top without removing it is called a peek or top operation. Checking whether the stack is completely empty is also an important operation. Stacks are widely used throughout computer science: programming language interpreters use a call stack to track the chain of function calls and local variables, compilers use stacks to check that brackets and parentheses are balanced in code, web browsers use stacks to implement the back button history, and many algorithms like depth-first search and postfix expression evaluation use stacks as their core data structure.",
        "keyPoints": [
          "Stacks strictly follow the Last-In, First-Out (LIFO) operational principle, ensuring the most recently added item is always removed first.",
          "The push operation adds a new item onto the top of the stack, and the pop operation removes and returns the item currently at the top.",
          "Only the topmost element of a stack is directly accessible — elements buried deeper in the stack can only be reached by first removing all items above them."
        ],
        "example": "The 'Undo' feature in text editors like Microsoft Word or VS Code relies entirely on a stack. Every time you type a character, delete text, or format something, that action is pushed onto the undo stack. When you press Ctrl+Z to undo, the most recent action is popped off the stack and reversed. The undo history works in reverse chronological order — exactly like a LIFO stack — allowing you to step backward through your editing history one action at a time.",
        "quiz": {
          "question": "Which element is removed first from a stack structure?",
          "options": [
            "The first item added",
            "The item in the middle",
            "The last item added",
            "A random item"
          ],
          "answer": "The last item added"
        },
        "xp": 10
      },
      {
        "title": "Understanding Queues",
        "explanation": "A queue is a linear data structure that stores and manages items according to the FIFO rule — First-In, First-Out. This principle mirrors the natural, fair behavior of any real-world waiting line or queue: the person (or item) who has been waiting the longest is always served or processed first, and new arrivals must join at the back and wait their turn. In a queue, there are two key access points: the front (also called the head), where items are removed, and the rear (also called the tail), where new items are added. The operation of adding a new item to the back of the queue is called enqueue. The operation of removing and returning the item at the front is called dequeue. Checking the front item without removing it is called peek or front. Queues are critically important in computer science because many real-world processes are inherently sequential and must be handled in arrival order. Operating systems use queues to manage CPU process scheduling, ensuring each process gets CPU time in a fair order. Network routers use queues to manage packets waiting to be transmitted. Web servers use request queues to handle multiple incoming HTTP requests fairly. Printers use print queues to process documents in the order they are received. Breadth-first search (BFS), one of the most important graph traversal algorithms, uses a queue as its central data structure to process nodes level by level.",
        "keyPoints": [
          "Queues operate strictly on the First-In, First-Out (FIFO) principle, ensuring the item that has waited the longest is always the next to be processed.",
          "The enqueue operation adds a new item to the back (rear/tail) of the queue, where all new arrivals must join.",
          "The dequeue operation removes and returns the item from the front (head) of the queue, which is always the oldest waiting item."
        ],
        "example": "Consider a shared office printer connected to a network. When you send a document to print, it is enqueued (added to the back of the print queue). If two colleagues sent documents just before you, their jobs are ahead of yours in the queue. The printer processes them in order: first document sent, first document printed. Your document prints third. If your boss urgently needs to print something, they join the back of the queue like everyone else — that is FIFO fairness in action.",
        "quiz": {
          "question": "What is the name of the operation used to remove an item from a queue?",
          "options": [
            "Push",
            "Pop",
            "Enqueue",
            "Dequeue"
          ],
          "answer": "Dequeue"
        },
        "xp": 10
      },
      {
        "title": "Linear Search Algorithm",
        "explanation": "Linear search (also called sequential search) is the most straightforward and intuitive searching algorithm in computer science. Given a collection of items and a target value you want to find, linear search examines each item in the collection one by one, starting from the very first element and moving systematically to the next. At each step, it compares the current item to the target. If a match is found, the search immediately ends successfully and returns the position of the found item. If the algorithm reaches the end of the collection without finding a match, it reports that the target is not present. The simplicity of linear search means it works equally well on sorted and unsorted collections — it makes no assumptions about the ordering of the data. This is a significant advantage over binary search, which requires sorted data. However, linear search has a major performance limitation: in the worst case (when the target is the very last element or is absent altogether), it must examine every single item in the collection. This gives it a worst-case time complexity of O(n), meaning its time grows linearly with the size of the collection. For small collections, this is perfectly acceptable. For large collections of millions of items, a more efficient algorithm like binary search or hashing is needed. Linear search remains useful as a fallback for unsorted or small datasets, and it is always correct in its results.",
        "keyPoints": [
          "Linear search sequentially examines each item in the collection one by one, starting from the first element, until the target is found or the collection ends.",
          "It works correctly on both sorted and unsorted collections, requiring no preprocessing or prior ordering of the data.",
          "Its worst-case time complexity is O(n) — if the target is at the last position or absent, every single element must be examined."
        ],
        "example": "Imagine searching for the name 'Priya' in an unsorted attendance register with 30 names. You start at line 1: 'Arun' — not a match. Line 2: 'Kiran' — not a match. You continue checking each name in order until you reach line 18: 'Priya' — found! The search took 18 comparisons. If 'Priya' had been on line 30 (the last entry), you would have needed all 30 comparisons — this worst-case scenario demonstrates the O(n) limitation of linear search.",
        "quiz": {
          "question": "What is the worst-case scenario for a linear search algorithm?",
          "options": [
            "The item is at the very front.",
            "The item is in the exact middle.",
            "The item is at the end or not in the list at all.",
            "The list is already sorted."
          ],
          "answer": "The item is at the end or not in the list at all."
        },
        "xp": 10
      },
      {
        "title": "Introduction to Graphs",
        "explanation": "A graph is a powerful and versatile non-linear data structure used to model and represent complex networks of interconnected objects, relationships, or systems. While arrays and linked lists represent linear sequences of items, and trees represent hierarchical parent-child relationships, graphs can represent any arbitrary relationship structure — making them one of the most general and widely applicable data structures in computer science. A graph consists of two fundamental components: a set of nodes (also called vertices), which represent the individual objects or entities in the network, and a set of edges (also called links or connections), which represent the relationships or connections between pairs of nodes. Edges can be undirected (bidirectional — the connection works both ways, like a two-way road) or directed (one-way — the connection only goes from one specific node to another, like a one-way street). Edges can also be weighted (carrying a numerical value representing distance, cost, or strength) or unweighted. A graph where every node is reachable from every other node is called a connected graph. Graphs are used extensively to model social networks (people as nodes, friendships as edges), maps and navigation (cities as nodes, roads as edges with distance weights), the internet (servers as nodes, network links as edges), airline route networks (airports as nodes, flight paths as edges), dependency graphs in software systems, and recommendation engines in apps like Netflix and Spotify. Fundamental graph algorithms include Depth-First Search (DFS), Breadth-First Search (BFS), Dijkstra's shortest path algorithm, and minimum spanning tree algorithms.",
        "keyPoints": [
          "Graphs represent complex networks using two components: nodes (vertices) that represent entities and edges (connections) that represent relationships between them.",
          "Edges can be directed (one-way flow, like a one-way street) or undirected (two-way connection), and weighted (with a cost value) or unweighted.",
          "Graphs model real-world interconnected systems that cannot be naturally represented by linear or hierarchical structures like arrays or trees."
        ],
        "example": "A Google Maps-style navigation system is a perfect example of a graph in action. Every city or intersection is represented as a node (vertex). Every road connecting two points is represented as an edge. The edges are weighted with travel distances or estimated travel times. When you ask for the shortest route from Hyderabad to Bangalore, a shortest-path algorithm like Dijkstra's traverses this massive road graph to find the optimal sequence of edges (roads) that minimizes total travel time.",
        "quiz": {
          "question": "In a graph data structure, what are the connection lines between nodes called?",
          "options": [
            "Vertices",
            "Pointers",
            "Edges",
            "Indexes"
          ],
          "answer": "Edges"
        },
        "xp": 10
      }
    ]
  },
  {
    "id": "react",
    "name": "React",
    "color": "#d99b24",
    "topics": [
      {
        "title": "What is React\"",
        "explanation": "React is a powerful, open-source JavaScript library originally developed and released by Facebook (now Meta) in 2013, primarily designed for building fast, dynamic, and interactive user interfaces for web and mobile applications. React fundamentally changed the way developers approach building modern web applications by introducing the concept of reusable, self-contained UI components. Instead of writing a monolithic, tangled web of HTML, CSS, and JavaScript, React encourages you to break your entire UI into small, independent, and reusable building blocks called components — each managing its own logic and appearance. One of React's most innovative features is the Virtual DOM. Rather than directly manipulating the browser's real DOM (which is slow and expensive), React maintains a lightweight in-memory copy of the DOM. When data in your application changes, React updates the Virtual DOM first, compares it to the previous version (a process called reconciliation or 'diffing'), identifies exactly what changed, and then applies only those minimal, targeted updates to the real browser DOM. This makes React applications remarkably fast and smooth. React is not a complete framework — it is specifically a view library focused on rendering UI. This flexibility allows developers to combine it with other libraries and tools for routing (React Router), state management (Redux, Zustand), and server-side rendering (Next.js). React's component-based architecture, its massive ecosystem, and its strong industry adoption make it one of the most in-demand skills in modern web development.",
        "keyPoints": [
          "React builds user interfaces using small, reusable, self-contained units called components, each managing its own structure, logic, and appearance.",
          "React's Virtual DOM system makes UI updates fast and efficient by computing the minimal set of real DOM changes needed rather than re-rendering everything.",
          "React is a focused UI library, not a complete framework — it is typically combined with other tools for routing, state management, and back-end communication."
        ],
        "example": "Think of building a website like assembling a complex LEGO construction. Each LEGO brick is a React component — a Button component, a Navbar component, a ProductCard component, a SearchBar component. You build each brick once, and then reuse it wherever needed across the application. Changing one brick (updating the Button component) automatically updates every place that brick is used — that is the power of React's component-based architecture.",
        "quiz": {
          "question": "What concept does React use to efficiently update the UI?",
          "options": [
            "Real DOM",
            "Shadow DOM",
            "Virtual DOM",
            "Component DOM"
          ],
          "answer": "Virtual DOM"
        },
        "xp": 10
      },
      {
        "title": "JSX JavaScript + HTML",
        "explanation": "JSX, which stands for JavaScript XML (or JavaScript Syntax Extension), is a special syntax extension to JavaScript that was introduced as part of the React ecosystem to make writing UI code significantly more intuitive and readable. JSX allows you to write what looks like HTML markup directly inside your JavaScript code files, blending the structure of a web page with the logic of a program in a clean, unified syntax. This combination makes React component code much easier to read, reason about, and maintain compared to the alternative of writing everything using nested JavaScript function calls. Under the hood, JSX is not valid JavaScript — it must be compiled by a tool called Babel (or a similar transpiler) before browsers can understand and execute it. Babel transforms each JSX element into an equivalent React.createElement() function call, which builds a JavaScript object description of the UI element. JSX comes with a few important rules and syntax differences from standard HTML. Every JSX expression must return a single root element — if you need to return multiple elements, you must wrap them in a parent div or use a React Fragment (an empty <>...</> wrapper). Because 'class' is a reserved keyword in JavaScript (used for defining ES6 classes), you must use 'className' instead when specifying CSS classes in JSX. Similarly, 'for' becomes 'htmlFor'. Event handler attributes follow camelCase naming: 'onclick' becomes 'onClick', 'onchange' becomes 'onChange'. To embed any JavaScript expression — variables, function calls, arithmetic, or ternary expressions — inside JSX markup, you enclose it in a single pair of curly braces {}.",
        "keyPoints": [
          "JSX allows developers to write HTML-like markup syntax directly inside JavaScript files, making React component UI code much more intuitive to read and write.",
          "Every JSX expression must be wrapped in a single root parent element, or in a React Fragment (<>...</>) if you do not want an extra DOM wrapper element.",
          "You embed JavaScript expressions inside JSX using curly braces {} — this can include variables, function calls, arithmetic, and ternary conditional expressions."
        ],
        "example": "In a React component, you might write: const UserCard = ({ name, age }) => (<div className='card'><h2>Hello, {name}!</h2><p>Age: {age}</p><p>Adult: {age >= 18 ? 'Yes' : 'No'}</p></div>). Notice: 'className' instead of 'class', curly braces for the JavaScript variables and ternary expression, and a single root div wrapping all elements. Babel compiles this JSX into nested React.createElement() calls that build the Virtual DOM representation.",
        "quiz": {
          "question": "How do you write a JavaScript expression inside JSX?",
          "options": [
            "Using <% %>",
            "Using {{ }}",
            "Using { }",
            "Using ## ##"
          ],
          "answer": "{ }"
        },
        "xp": 10
      },
      {
        "title": "Components and Props",
        "explanation": "Components are the fundamental architectural unit of React applications. A component is an independent, reusable, and self-contained piece of the user interface — essentially a custom-built HTML element with its own structure, styling, and behavior. In modern React using functional components, a component is simply a JavaScript function that accepts an input object called props and returns JSX describing what should be displayed on screen. The entire React application is structured as a tree of nested components, with a root App component at the top containing all other components. Props (short for properties) are React's primary mechanism for passing data and configuration from a parent component down to a child component. Props work conceptually just like function parameters: the parent component passes props to a child component when it renders the child in JSX, using an attribute-style syntax, and the child function receives all those props bundled together as a single JavaScript object. Props enable the same component to display different content or behave differently depending on what it receives, making components highly flexible and reusable. One critical rule to always remember: props are strictly read-only from the perspective of the receiving child component. A child component must never directly modify or mutate its props. This is a core principle in React called the 'unidirectional data flow' or 'one-way data binding' — data flows downward from parent to child through props, making the application's data flow predictable and easier to debug.",
        "keyPoints": [
          "Functional components are JavaScript functions that accept a props object as their parameter and return JSX describing the component's UI structure.",
          "Props are passed to child components using HTML attribute-like syntax in JSX and received inside the component as a plain JavaScript object.",
          "Props are strictly read-only — a child component must never modify or mutate the props it receives; data always flows one-way from parent to child."
        ],
        "example": "Defining a reusable component: function StudentCard({ name, grade, subject }) { return (<div><h3>{name}</h3><p>Grade: {grade} | Subject: {subject}</p></div>); }. Using it three times with different props: <StudentCard name='Sai' grade='A' subject='React' />, <StudentCard name='Ravi' grade='B' subject='DSA' />, <StudentCard name='Priya' grade='A+' subject='Maths' />. One component definition creates three completely different card instances — that is the power of props and reusability.",
        "quiz": {
          "question": "What are props in React?",
          "options": [
            "Internal state of a component",
            "Data passed from parent to child component",
            "CSS styles for a component",
            "Built-in React functions"
          ],
          "answer": "Data passed from parent to child component"
        },
        "xp": 10
      },
      {
        "title": "State and useState Hook",
        "explanation": "State is a core concept in React representing the internal, mutable data that a component needs to track and manage over time. While props are data passed in from the outside (from a parent component) and are read-only, state is data that lives inside the component itself and can be changed by the component. The defining characteristic of state is that whenever it changes, React automatically re-renders the component — recalculates its output JSX and updates the browser DOM to reflect the new data. This automatic re-rendering in response to state changes is the mechanism that makes React applications dynamic and interactive. In modern React, you add state to functional components using the useState Hook — a special function provided by React. The useState Hook accepts one argument: the initial value of the state variable. It returns an array containing exactly two elements: the current value of the state variable and a setter function used to update that value. You extract these two items using JavaScript array destructuring. The naming convention for the setter function is to prefix the state variable name with 'set'. It is crucial to understand that you must never directly mutate or reassign a state variable — you must always use the setter function. Calling the setter function tells React that the state has changed and triggers the re-render cycle. State should be used to store data that changes over time and whose changes should cause a visual update: form input values, toggle booleans, counters, loading indicators, fetched data from APIs, and so on.",
        "keyPoints": [
          "The useState Hook is called with an initial value and returns an array containing the current state value and a setter function, typically extracted using array destructuring.",
          "Calling the setter function updates the state value and automatically triggers React to re-render the component with the new data reflected in the UI.",
          "State should hold dynamic data that changes over time — such as form inputs, toggles, counters, or data fetched from an API."
        ],
        "example": "A complete counter example: function Counter() { const [count, setCount] = useState(0); const [step, setStep] = useState(1); return (<div><p>Count: {count}</p><button onClick={() => setCount(count + step)}>+{step}</button><button onClick={() => setCount(count - step)}>-{step}</button><input type='number' value={step} onChange={e => setStep(Number(e.target.value))} /></div>); }. Two separate pieces of state: count (the current value) and step (how much to increment/decrement). Each is managed independently with its own useState call.",
        "quiz": {
          "question": "What does the useState hook return?",
          "options": [
            "An object with value and update",
            "A single number",
            "An array with current value and setter function",
            "A boolean"
          ],
          "answer": "An array with current value and setter function"
        },
        "xp": 10
      },
      {
        "title": "useEffect Hook",
        "explanation": "The useEffect Hook is React's mechanism for performing side effects in functional components. A side effect is any operation that reaches outside the component's own scope to interact with the external world — examples include fetching data from a REST API or GraphQL server, reading from or writing to localStorage, directly manipulating DOM elements that React doesn't control, setting up subscriptions or WebSocket connections, starting and stopping timers with setInterval or setTimeout, logging analytics events, and updating the browser tab's document title. Without useEffect, functional components would be limited to pure rendering logic. useEffect takes two arguments: a callback function containing the side effect code to run, and an optional dependency array that controls exactly when the effect runs. The dependency array is the key to mastering useEffect. If you omit the dependency array entirely, the effect runs after every single render — useful but often not what you want. If you pass an empty array [], the effect runs only once, right after the component first mounts — this is perfect for fetching initial data or setting up a one-time subscription. If you pass an array containing specific state variables or props, the effect re-runs only when any of those listed dependencies change — this is ideal for effects that respond to specific data changes. Additionally, useEffect supports an optional cleanup mechanism: if your callback function returns another function, React will call that returned function to perform cleanup before the component unmounts or before the effect runs again. This cleanup prevents memory leaks from lingering subscriptions, event listeners, or timers.",
        "keyPoints": [
          "useEffect runs its callback function after the component renders, and its exact timing is controlled by the optional dependency array you provide as the second argument.",
          "An empty dependency array [] causes the effect to run only once after the initial mount, which is ideal for one-time data fetching or setup operations.",
          "Returning a cleanup function from useEffect is the correct way to cancel subscriptions, remove event listeners, or clear timers to prevent memory leaks."
        ],
        "example": "A component that fetches user data on mount and updates the document title when the user's name changes: useEffect(() => { fetch('/api/user/' + userId).then(r => r.json()).then(data => setUser(data)); }, [userId]); — runs whenever userId changes. useEffect(() => { document.title = user ? 'Profile: ' + user.name : 'Loading...'; return () => { document.title = 'App'; }; }, [user]); — updates title when user changes and resets it on unmount. Two separate useEffect calls for two separate concerns — this separation of effects is a React best practice.",
        "quiz": {
          "question": "When does useEffect with an empty dependency array [] run?",
          "options": [
            "Every time state changes",
            "Every second",
            "Only once when the component first mounts",
            "Never"
          ],
          "answer": "Only once when the component first mounts"
        },
        "xp": 10
      },
      {
        "title": "What is React\"",
        "explanation": "React is a widely adopted, open-source JavaScript library created and maintained by Meta (formerly Facebook) that is specifically designed for building interactive, component-based user interfaces for web applications. Released publicly in 2013, React quickly became one of the most popular front-end technologies in the world, and today it powers the user interfaces of many of the world's largest websites and applications including Facebook, Instagram, WhatsApp Web, Netflix, Airbnb, and thousands of others. The central philosophy of React is the component-based architecture. Instead of building an entire page as one large, monolithic block of HTML and JavaScript, React encourages you to decompose your UI into a hierarchy of small, focused, reusable, and independently manageable pieces called components. Each component is responsible for rendering a specific part of the UI and managing its own behavior. Components can be nested inside other components to build complex UIs from simple parts. React also introduced the concept of declarative programming to the front end — instead of imperatively telling the browser how to update the DOM step by step, you simply describe what the UI should look like given the current data (state), and React handles all the DOM updates automatically and efficiently. This makes React code dramatically easier to understand, predict, and debug compared to traditional imperative DOM manipulation with vanilla JavaScript.",
        "keyPoints": [
          "React is an open-source JavaScript library for building user interfaces, created by Meta and widely used across the web development industry worldwide.",
          "It promotes a component-based architecture where the entire UI is assembled from small, reusable, independently managed building blocks called components.",
          "React uses a declarative programming style — you describe what the UI should look like based on current data, and React handles all efficient DOM updates automatically."
        ],
        "example": "A typical React application like a shopping cart is broken into components: an App component containing a Navbar component, a ProductList component (which contains many ProductCard components), and a CartSidebar component. When a user clicks 'Add to Cart' on a ProductCard, that component's state or a shared state updates, and React automatically re-renders only the components that depend on that data — like the CartSidebar showing the new item count.",
        "quiz": {
          "question": "What are the reusable building blocks of a React application called?",
          "options": [
            "Elements",
            "Components",
            "Functions",
            "Tags"
          ],
          "answer": "Components"
        },
        "xp": 10
      },
      {
        "title": "Understanding JSX",
        "explanation": "JSX, which stands for JavaScript XML, is a unique and powerful syntax extension for JavaScript that was created specifically as part of the React library to make writing user interface code more natural, readable, and maintainable. JSX allows you to write HTML-like markup structures directly within your JavaScript code files, rather than maintaining completely separate HTML template files. This blending of UI structure and JavaScript logic in the same file makes React components much easier to understand and work with, as everything related to a single component lives in one place. Before JSX existed, developers building React applications had to write verbose, deeply nested JavaScript function calls like React.createElement('div', { className: 'container' }, React.createElement('h1', null, 'Hello World')) for every UI element — this was tedious, error-prone, and extremely hard to read for anything beyond trivial UIs. JSX transforms this into the far more readable and intuitive <div className='container'><h1>Hello World</h1></div>. It is crucial to understand that JSX is not HTML and is not understood by web browsers directly. Before being served to a browser, JSX code must be processed and compiled by a JavaScript transpiler tool — most commonly Babel — which converts every JSX element into its equivalent React.createElement() function call. This compilation step happens automatically in projects created with tools like Create React App or Vite, so as a developer you never have to manually run Babel. JSX also differs from HTML in several specific syntax rules: CSS class attributes must be written as className, the for attribute in labels becomes htmlFor, and all event listeners use camelCase (onClick, onChange, onSubmit) rather than lowercase (onclick, onchange, onsubmit).",
        "keyPoints": [
          "JSX is a syntax extension that allows HTML-like markup to be written directly inside JavaScript files, making React component code more readable and intuitive.",
          "Browsers cannot read or execute JSX directly — it must be compiled into standard JavaScript by a transpiler like Babel before being delivered to the browser.",
          "JSX differs from HTML in key ways: CSS classes are 'className', the label 'for' attribute is 'htmlFor', and all event handler names use camelCase format."
        ],
        "example": "Without JSX, a simple React heading looks like: React.createElement('h1', { className: 'title', onClick: handleClick }, 'Welcome, ' + userName). With JSX, the identical code becomes the far more readable: <h1 className='title' onClick={handleClick}>Welcome, {userName}</h1>. The JSX version mirrors the structure of the final HTML output, making it instantly clear what the rendered output will look like — a huge developer experience improvement.",
        "quiz": {
          "question": "What does the abbreviation JSX stand for in React?",
          "options": [
            "JavaScript XML",
            "Java Syntax Extension",
            "JSON X-platform",
            "JavaScript Extension"
          ],
          "answer": "JavaScript XML"
        },
        "xp": 10
      },
      {
        "title": "React Props",
        "explanation": "Props, an abbreviation of 'properties', are the primary mechanism in React for passing data, configuration, and callback functions from a parent component down to its child components. They are the foundation of React's data flow model and enable the creation of flexible, dynamic, and highly reusable components. Conceptually, passing props to a React component is very similar to calling a JavaScript function with arguments, or to passing parameters in a function definition — the component defines what props it expects, and the parent provides those values when rendering the component. When a parent component renders a child component in JSX, it passes props using a syntax that looks exactly like HTML attributes: <ChildComponent name='Alice' age={25} isAdmin={true} />. Inside the child component function, all these props are received as a single JavaScript object, conventionally named 'props'. You can then access individual values with props.name, props.age, props.isAdmin, or use destructuring for cleaner syntax: function ChildComponent({ name, age, isAdmin }) {...}. An extremely important constraint that is central to React's design: props are strictly read-only from the child's perspective. A component receiving props must treat them as immutable data — it can read and use them freely, but it must never directly modify or reassign them. This immutability rule ensures React's data flow is always predictable and unidirectional (flowing from parent to child), which is what makes large React applications manageable and their behavior easy to reason about. Functions can also be passed as props, enabling child components to communicate back up to parents through callback patterns.",
        "keyPoints": [
          "Props are passed from parent to child components using HTML attribute-like syntax in JSX, and received inside the child as a single props object.",
          "Props are strictly read-only and immutable from the receiving child component's perspective — they must never be modified by the child.",
          "Functions can be passed as props (callback props), enabling child components to trigger actions or send data back up to their parent components."
        ],
        "example": "A reusable UserProfile component: function UserProfile({ username, bio, followerCount, onFollow }) { return (<div><h2>@{username}</h2><p>{bio}</p><span>{followerCount} followers</span><button onClick={onFollow}>Follow</button></div>); }. The parent renders it as: <UserProfile username='saicharan' bio='KLU Student' followerCount={142} onFollow={() => handleFollow('saicharan')} />. The component displays different data for every user while the callback prop allows the button click to reach back to the parent — a complete props pattern.",
        "quiz": {
          "question": "Can a child component modify the props it receives from its parent?",
          "options": [
            "Yes, at any time",
            "No, props are read-only",
            "Yes, if it uses a special plugin",
            "Only if the parent is hidden"
          ],
          "answer": "No, props are read-only"
        },
        "xp": 10
      },
      {
        "title": "React State and useState",
        "explanation": "State is one of the most fundamental and important concepts in React. It represents the dynamic, internal data that a component owns and manages — the information that can change over time in response to user interactions, API responses, timers, or other events. While props are data received from the outside (from a parent) and are immutable from the component's perspective, state is data generated and owned internally by the component itself, and it can be freely updated by the component. The most important characteristic of state is React's reactivity: whenever a component's state is updated, React automatically schedules a re-render of that component — it recalculates the component's JSX output using the new state values and efficiently updates only the changed parts of the browser DOM. This seamless, automatic synchronization between state data and the displayed UI is the core feature that makes React applications feel interactive and dynamic. In modern functional components, state is managed using the useState Hook — one of the built-in React Hooks. You call useState with the initial value you want the state variable to start with. It returns an array of exactly two elements: the current value of the state, and a setter function that you call when you want to change the state. The setter function accepts either a new value directly, or an updater function that receives the previous state value and returns the new one (preferred when the new state depends on the old state). Calling the setter function queues a state update and tells React that a re-render is needed. It is essential to understand that calling the setter never directly mutates the state variable — instead, it schedules React to re-render the component with the new value.",
        "keyPoints": [
          "State holds a component's own internal dynamic data that can change over time, as opposed to props which are external and read-only.",
          "The useState Hook is called with an initial value and returns [currentValue, setterFunction] through array destructuring — the setter triggers re-renders.",
          "Never directly mutate state variables — always use the setter function to ensure React correctly detects changes and schedules the appropriate re-render."
        ],
        "example": "A form with controlled inputs: function LoginForm() { const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [isSubmitting, setIsSubmitting] = useState(false); const handleSubmit = async () => { setIsSubmitting(true); await loginUser(email, password); setIsSubmitting(false); }; return (<div><input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' /><input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' /><button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button></div>); }. Three pieces of state, each independently managed — this pattern is standard in real React applications.",
        "quiz": {
          "question": "Which built-in React Hook is used to manage local state in a component?",
          "options": [
            "useEffect",
            "useContext",
            "useState",
            "useReducer"
          ],
          "answer": "useState"
        },
        "xp": 10
      },
      {
        "title": "Handling Events",
        "explanation": "Event handling in React is the mechanism that allows your application to listen for and respond to user interactions and browser events, bringing your UI to life. Every time a user clicks a button, types in an input field, submits a form, hovers over an element, scrolls the page, or presses a keyboard key, a browser event is fired. React allows you to attach event handler functions to JSX elements so your application can react appropriately to these user actions. React event handling is conceptually similar to standard HTML event handling, but with several important syntactic and behavioral differences. First, event attributes in React use camelCase naming: 'onclick' in HTML becomes 'onClick' in JSX, 'onchange' becomes 'onChange', 'onsubmit' becomes 'onSubmit', 'onmouseenter' becomes 'onMouseEnter', and so on. Second, instead of passing a string of JavaScript code as the attribute value (as in old-style HTML event handling), you pass a JavaScript function reference inside curly braces. React does not use actual native DOM events — instead it uses SyntheticEvents, which are React's cross-browser wrapper around native events. SyntheticEvents normalize event behavior across different browsers, ensuring your event handlers work consistently everywhere. Each event handler receives a SyntheticEvent object as its first argument, which provides properties like event.target (the element that triggered the event), event.target.value (useful for input fields), event.preventDefault() (to stop default browser behavior like form submission navigating away), and event.stopPropagation() (to prevent the event from bubbling up to parent elements). When updating state in response to events, you use the useState setter function inside your event handler, which triggers a re-render with the new data.",
        "keyPoints": [
          "React event attributes are written in camelCase format in JSX (onClick, onChange, onSubmit) rather than the lowercase format used in HTML attributes.",
          "Event handler functions are passed inside curly braces {} as references to JavaScript functions, not as strings of code.",
          "React uses SyntheticEvents — cross-browser normalized event wrappers — and each handler receives the event object, which provides target, preventDefault(), and other useful properties."
        ],
        "example": "A search input that filters a list as you type: function SearchBar({ items }) { const [query, setQuery] = useState(''); const filtered = items.filter(item => item.toLowerCase().includes(query.toLowerCase())); return (<div><input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='Search...' /><ul>{filtered.map((item, i) => <li key={i}>{item}</li>)}</ul></div>); }. The onChange event fires on every keystroke, updates the query state, which triggers a re-render that recalculates the filtered list — a complete, real-time reactive UI pattern.",
        "quiz": {
          "question": "How do you write the standard click event attribute in React?",
          "options": [
            "onclick",
            "onClick",
            "on-click",
            "CLICK"
          ],
          "answer": "onClick"
        },
        "xp": 10
      }
    ]
  }
];