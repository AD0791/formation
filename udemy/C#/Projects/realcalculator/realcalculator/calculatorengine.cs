using System;
namespace realcalculator
{
    public class calculatorengine
    {
        public double cal(string operation, double fnum, double snum)
        {
            double res;
            switch (operation.ToLower())
            {
                case "add":
                case "+":
                    res = fnum + snum;
                    break;
                case "substract":
                case "-":
                    res = fnum - snum;
                    break;
                case "multiply":
                case "*":
                    res = fnum * snum;
                    break;
                case "divide":
                case "/":
                    res = fnum / snum;
                    break;
                case "modulo":
                case "%":
                    res = fnum % snum;
                    break;
                default:
                    throw new InvalidOperationException("operation trash");
            }
            return res;
        }
    }
}
