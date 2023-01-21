import tkinter as tk
from tkinter import messagebox, ttk

#Calculating the environmental impact of the fashion and textile choices
def calculate_impact():
    global materials
    global production
    global transportation
    global amount

    #initialize environmental impact as 0
    impact = 0
 
    #calculating impact based on materials used
    if materials.get() == "Organic cotton":
        impact += 5 * amount.get()
    elif materials.get() == "Conventional cotton":
        impact += 10 * amount.get()
    elif materials.get() == "Synthetic materials":
        impact += 15 * amount.get()

    #calculating impact based on production methods
    if production.get() == "Local and fair trade":
        impact += 5
    elif production.get() == "Mass production":
        impact += 10
    elif production.get() == "Sweatshop labor":
        impact += 15

    #calculating impact based on transportation methods
    if transportation.get() == "Air freight":
        impact += 15
    elif transportation.get() == "Sea freight":
        impact += 10
    elif transportation.get() == "Road freight":
        impact += 5

    #Analyzing the impact score
    if impact <= 20:
        messagebox.showinfo("Environmental Impact", "Your fashion and textile choices have a low environmental impact. Keep up the good work!")
    elif impact > 20 and impact <= 40:
      messagebox.showinfo("Environmental Impact", "Your fashion and textile choices have a moderate environmental impact. There are opportunities for improvement.")
    else:
      messagebox.showinfo("Environmental Impact", "Your fashion and textile choices have a high environmental impact. Consider making more sustainable choices.")

#recommending more environmentally-friendly alternatives
      messagebox.showinfo("Recommendations", "Here are some recommendations for more environmentally-friendly alternatives: \n1. Consider using sustainable materials such as organic cotton, hemp or bamboo. \n2. Support local and fair trade production methods. \n3. Look for products with low transportation emissions. \n4. Consider purchasing second-hand clothing. \n5. Invest in high-quality products that will last longer.")
def toggle_theme():
    global theme
    if theme.get() == "light":
        theme.set("dark")
        root.configure(bg="#26242f")
        toggle_button.configure(bg="white",fg="#26242f")
        materials_label.configure(bg="#26242f",fg="white")
        amount_label.configure(bg="#26242f",fg="white")
        production_label.configure(bg="#26242f",fg="white")
        transportation_label.configure(bg="#26242f",fg="white")
        materials_dropdown.configure(bg="#26242f",fg="white")
        amount_entry.configure(bg="#26242f",fg="white")
        production_dropdown.configure(bg="#26242f",fg="white")
        transportation_dropdown.configure(bg="#26242f",fg="white")
    else:
        theme.set("light")
        root.configure(bg="white")
        toggle_button.configure(bg="#26242f",fg="white")
        materials_label.configure(bg="white",fg="#26242f")
        amount_label.configure(bg="white",fg="#26242f")
        production_label.configure(bg="white",fg="#26242f")
        transportation_label.configure(bg="white",fg="#26242f")
        materials_dropdown.configure(bg="white",fg="#26242f")
        amount_entry.configure(bg="white",fg="#26242f")
        production_dropdown.configure(bg="white",fg="#26242f")
        transportation_dropdown.configure(bg="white",fg="#26242f")

   



    

#Creating the GUI
root = tk.Tk()
root.title("Fashion and Textile Impact Calculator")

style = ttk.Style()
style.configure("Light.TFrame", background="white", foreground="#26242f")
style.configure("Dark.TFrame", background="#26242f", foreground="white")

#Creating a variable for the theme
theme = tk.StringVar(root)
theme.set("light")

#Creating a toggle button for the theme
toggle_button = tk.Button(root, text="Toggle theme", command=toggle_theme)
toggle_button.pack()

frame = ttk.Frame(root, style="Light.TFrame")
frame.pack()

#Creating label for materials
materials_label = ttk.Label(frame, text="Select the materials used:")
materials_label.pack()

#Creating a variable for materials
materials = tk.StringVar(root)
materials.set("Organic cotton")

#Creating a dropdown menu for materials
materials_dropdown = ttk.OptionMenu(frame, materials, "Organic cotton", "Conventional cotton", "Synthetic materials")
materials_dropdown.pack()

#Creating label for the amount of materials
amount_label = ttk.Label(frame, text="Enter the amount of materials used:")
amount_label.pack()

#Creating a variable for the amount of materials
amount = tk.DoubleVar(root)

#Creating an entry box for the amount of materials
amount_entry = ttk.Entry(frame, textvariable=amount)
amount_entry.pack()

#Creating label for production methods
production_label = ttk.Label(frame, text="Select the production methods:")
production_label.pack()

#Creating a variable for production methods
production = tk.StringVar(root)
production.set("Local and fair trade")

#Creating a dropdown menu for production methods
production_dropdown = ttk.OptionMenu(frame, production, "Local and fair trade", "Mass production", "Sweatshop labor")
production_dropdown.pack()




#Creating label for transportation methods
transportation_label = ttk.Label(frame, text="Select the transportation methods:")
transportation_label.pack()

#Creating a variable for transportation methods
transportation = tk.StringVar(root)
transportation.set("Air freight")

#Creating a dropdown menu for transportation methods
transportation_dropdown = ttk.OptionMenu(frame, transportation, "Air freight", "Sea freight", "Road freight")
transportation_dropdown.pack()

#Creating a calculate button
calculate_button = ttk.Button(frame, text="Calculate Impact", command=calculate_impact)
calculate_button.pack()

root.mainloop()