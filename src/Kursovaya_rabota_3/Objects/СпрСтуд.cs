﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_rabota_3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Спр студ.
    /// </summary>
    // *** Start programmer edit section *** (СпрСтуд CustomAttributes)

    // *** End programmer edit section *** (СпрСтуд CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник студенты")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СпрСтудE", new string[] {
            "Фио as \'Фио студента\'"})]
    [View("СпрСтудL", new string[] {
            "Фио as \'Фио студента\'"})]
    public class СпрСтуд : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        // *** Start programmer edit section *** (СпрСтуд CustomMembers)

        // *** End programmer edit section *** (СпрСтуд CustomMembers)

        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СпрСтуд.Фио CustomAttributes)

        // *** End programmer edit section *** (СпрСтуд.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СпрСтуд.Фио Get start)

                // *** End programmer edit section *** (СпрСтуд.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СпрСтуд.Фио Get end)

                // *** End programmer edit section *** (СпрСтуд.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СпрСтуд.Фио Set start)

                // *** End programmer edit section *** (СпрСтуд.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СпрСтуд.Фио Set end)

                // *** End programmer edit section *** (СпрСтуд.Фио Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СпрСтудE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрСтудE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрСтудE", typeof(IIS.Kursovaya_rabota_3.СпрСтуд));
                }
            }
            
            /// <summary>
            /// "СпрСтудL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СпрСтудL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СпрСтудL", typeof(IIS.Kursovaya_rabota_3.СпрСтуд));
                }
            }
        }
    }
}
