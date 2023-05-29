import tkinter as tk

def submit_form():
    nome = nome_entry.get()
    email = email_entry.get()
    print(f"Nome: {nome}, Email: {email}")

root = tk.Tk()
root.title("Formulário Python Tkinter")

nome_label = tk.Label(root, text="Nome:")
nome_label.pack()
nome_entry = tk.Entry(root)
nome_entry.pack()

email_label = tk.Label(root, text="Email:")
email_label.pack()
email_entry = tk.Entry(root)
email_entry.pack()

button = tk.Button(root, text="Enviar", command=submit_form)
button.pack()

root.mainloop()
