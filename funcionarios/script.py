import csv
import random
from faker import Faker

fake = Faker('pt_BR')

class Funcionario:
    def __init__(self, matricula, nome, idade, salario, tempo_empresa, performance, uf, sexo):
        self.matricula = matricula
        self.nome = nome
        self.idade = idade
        self.salario = salario
        self.tempo_empresa = tempo_empresa
        self.performance = performance
        self.uf = uf
        self.sexo = sexo

    @staticmethod
    def gera_funcionario(n=10):
        funcionarios = []
        for i in range(1, n+1):
            sexo = random.choice(['M', 'F'])
            nome = fake.first_name_male() if sexo == 'M' else fake.first_name_female()
            idade = random.randint(18, 65)
            salario = round(random.uniform(1335, 20000), 2)
            tempo_empresa = random.randint(1, 40)
            performance = random.randint(1, 10)
            uf = fake.estado_sigla()

            funcionario = Funcionario(
                matricula=i,
                nome=nome,
                idade=idade,
                salario=salario,
                tempo_empresa=tempo_empresa,
                performance=performance,
                uf=uf,
                sexo=sexo
            )
            funcionarios.append(funcionario)
        return funcionarios

    @staticmethod
    def salva_em_csv(funcionarios, nome_arquivo='funcionarios.csv'):
        with open(nome_arquivo, mode='w', newline='', encoding='utf-8') as arquivo:
            writer = csv.writer(arquivo)
            writer.writerow([
                'Matrícula', 'Nome', 'Idade', 'Salário',
                'Tempo de Empresa', 'Performance', 'UF', 'Sexo'
            ])  # Cabeçalho opcional, mas útil
            for funcionario in funcionarios:
                writer.writerow([
                    funcionario.matricula,
                    funcionario.nome,
                    funcionario.idade,
                    funcionario.salario,
                    funcionario.tempo_empresa,
                    funcionario.performance,
                    funcionario.uf,
                    funcionario.sexo
                ])

# Geração e salvamento
lista_funcionarios = Funcionario.gera_funcionario(100)
Funcionario.salva_em_csv(lista_funcionarios)
