using System;
namespace realcalculator
{
    public class inputconverter
    {
        public double itn(string textinput)
        {
            double number;
            if (!double.TryParse(textinput, out number))
            {
                throw new ArgumentException("Expected a numeric value");
            }
            return number;
        }
    }
}
