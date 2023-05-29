using System;
using System.Windows.Forms;

public class FormularioWinForms : Form
{
    private TextBox nomeTextBox;
    private TextBox emailTextBox;

    public FormularioWinForms()
    {
        this.Text = "Formulário C# Windows Forms";

        Label nomeLabel = new Label();
        nomeLabel.Text = "Nome:";
        nomeLabel.Location = new System.Drawing.Point(10, 10);
        this.Controls.Add(nomeLabel);

        nomeTextBox = new TextBox();
        nomeTextBox.Location = new System.Drawing.Point(10, 30);
        this.Controls.Add(nomeTextBox);

        Label emailLabel = new Label();
        emailLabel.Text = "Email:";
        emailLabel.Location = new System.Drawing.Point(10, 60);
        this.Controls.Add(emailLabel);

        emailTextBox = new TextBox();
        emailTextBox.Location = new System.Drawing.Point(10, 80);
        this.Controls.Add(emailTextBox);

        Button button = new Button();
        button.Text = "Enviar";
        button.Location = new System.Drawing.Point(10, 110);
        button.Click += Button_Click;
        this.Controls.Add(button);
    }

    private void Button_Click(object sender, EventArgs e)
    {
        string nome = nomeTextBox.Text;
        string email = emailTextBox.Text;
        Console.WriteLine($"Nome: {nome}, Email: {email}");
    }

    public static void Main()
    {
        Application.Run(new FormularioWinForms());
    }
}
