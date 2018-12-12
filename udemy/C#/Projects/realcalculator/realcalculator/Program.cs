using System;

namespace realcalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // remember the acceptance criteria, flow chart
            // one instance to handle the input
            //another instance to handle the calculation 
            // consider exception to mark the mistake
            try
            {
                inputconverter ic = new inputconverter();
                calculatorengine ce = new calculatorengine();

                double fnum = ic.itn(Console.ReadLine());
                double snum = ic.itn(Console.ReadLine());
                string operation = Console.ReadLine();

                double res = ce.cal(operation, fnum, snum);
                Console.WriteLine(res);
            }
            catch (Exception ex)
            {
                // to do: remember we will won't to log this message
                Console.WriteLine(ex.Message);

            }
        }
    }
}
