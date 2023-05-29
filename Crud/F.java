import javax.swing.*;

public class FormularioSwing {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Formulário Java Swing");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        frame.add(panel);

        JLabel nomeLabel = new JLabel("Nome:");
        JTextField nomeField = new JTextField(20);
        panel.add(nomeLabel);
        panel.add(nomeField);

        JLabel emailLabel = new JLabel("Email:");
        JTextField emailField = new JTextField(20);
        panel.add(emailLabel);
        panel.add(emailField);

        JButton button = new JButton("Enviar");
        button.addActionListener(e -> {
            String nome = nomeField.getText();
            String email = emailField.getText();
            System.out.println("Nome: " + nome + ", Email: " + email);
        });
        panel.add(button);

        frame.pack();
        frame.setVisible(true);
    }
}
